const {Groq} = require('groq-sdk')

const groq = new Groq({
    apiKey: `${process.env.GROQ_API_KEY}`
})

const groqai = async (content) => {
    const reply = await groq.chat.completions.create({
        messages : [{
            role: "user", 
            content
        }], 
        model: "llama3-8b-8192"
    })
    return reply;
}

module.exports = groqai