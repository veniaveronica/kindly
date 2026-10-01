const { neon } = require('@neondatabase/serverless');

exports.handler = async (event, context) => {
  try {
    // Connect to Neon Database using the URL from .env
    const sql = neon(process.env.DATABASE_URL);
    
    // Auto-create table if it doesn't exist yet
    await sql`
      CREATE TABLE IF NOT EXISTS kindly_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        class_name VARCHAR(100) NOT NULL,
        quiz_score INTEGER,
        audio_data TEXT,
        individual_score INTEGER,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const method = event.httpMethod;

    if (method === 'GET') {
      // Get all submissions (For Teacher Dashboard & checking individual status)
      const results = await sql`SELECT * FROM kindly_submissions ORDER BY submitted_at DESC`;
      return { statusCode: 200, body: JSON.stringify(results) };
    } 
    
    else if (method === 'POST') {
      // Student submits quiz or audio
      const body = JSON.parse(event.body);
      const { name, className, quizScore, audioData } = body;
      
      // Check if student already exists in database
      const existing = await sql`SELECT id FROM kindly_submissions WHERE LOWER(name) = LOWER(${name}) LIMIT 1`;
      
      if (existing.length > 0) {
        // Update existing student record
        if (quizScore !== undefined && quizScore !== null) {
          await sql`UPDATE kindly_submissions SET quiz_score = ${quizScore} WHERE id = ${existing[0].id}`;
        }
        if (audioData !== undefined && audioData !== null) {
          await sql`UPDATE kindly_submissions SET audio_data = ${audioData} WHERE id = ${existing[0].id}`;
        }
      } else {
        // Insert new student
        await sql`
          INSERT INTO kindly_submissions (name, class_name, quiz_score, audio_data)
          VALUES (${name}, ${className}, ${quizScore || null}, ${audioData || null})
        `;
      }
      return { statusCode: 200, body: JSON.stringify({ message: 'Saved successfully!' }) };
    }
    
    else if (method === 'PUT') {
      // Teacher grades the task
      const body = JSON.parse(event.body);
      const { id, individualScore } = body;
      
      await sql`UPDATE kindly_submissions SET individual_score = ${individualScore} WHERE id = ${id}`;
      return { statusCode: 200, body: JSON.stringify({ message: 'Grade saved successfully!' }) };
    }

    else if (method === 'DELETE') {
      // Teacher deletes a submission
      const body = JSON.parse(event.body);
      await sql`DELETE FROM kindly_submissions WHERE id = ${body.id}`;
      return { statusCode: 200, body: JSON.stringify({ message: 'Deleted successfully!' }) };
    }

    return { statusCode: 405, body: 'Method Not Allowed' };

  } catch (error) {
    console.error("Database Error:", error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
