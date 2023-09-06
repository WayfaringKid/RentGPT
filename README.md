# RentGPT
LLM chatbot for personalized rental lease consulting 

## Project Description

**RentGPT** aims to simplify and clarify the rental lease process by providing personalized rental lease consulting through an interactive chatbot. It will allow clients to upload their rental lease agreements for review. The chatbot will perform an initial screening to identify potentially malicious or unfavorable clauses and then proceed to answer any queries the client may have regarding their lease, their rights, or their stay.

## Features

- **Document Upload**: Users can upload their rental lease document in various formats like PDF, Word, etc.
- **Document Analysis**: Automatic scanning and flagging of potentially harmful clauses or terms in the lease.
- **Chatbot Interface**: A user-friendly chat interface for users to ask questions and get immediate responses.
- **Custom Advice**: Personalized advice based on the specific clauses found in the user's lease.
- **Rights and Regulations**: Information about the user's rights and obligations under the lease.

### Optional Features

- **User Authentication**: A secure login system to save user preferences and document uploads for future reference.
- **Database**: A database to store common questions and answers, as well as to log all user interactions for continual improvement.

## Tech Stack

- **OpenAI API**: For the core chatbot logic and document analysis.
- **React**: For front-end development.
- **CSS**: For styling the front-end components.
- **Flask**: For the back-end logic.
- **CrowdStrike**: For cybersecurity measures to ensure the integrity and confidentiality of user data.

### Optional

- **Database**: SQL/NoSQL for storing and managing data.
- **User Authentication**: OAuth or JWT for a secure login system.

## Workflow

1. **User Interaction**: The user uploads the rental lease document through a secure and user-friendly interface.
2. **Document Parsing**: The back-end parses the document and extracts the text for analysis.
3. **Text Analysis**: The OpenAI API scans through the document and flags any terms or clauses that may be of concern.
4. **User Query**: The user can then interact with the chatbot to ask questions about their lease.
5. **Chatbot Response**: The OpenAI API generates responses that are then displayed to the user.

## Security Measures

We place a high emphasis on security, especially given that we handle sensitive documents and data. The system will incorporate **CrowdStrike** to:

- Monitor and protect against unauthorized access or cyber-attacks.
- Provide real-time threat intelligence and response.
- Secure both the backend and frontend components of the application.
  
## Risks and Challenges

1. **Legal Compliance**: As this app provides legal advice, it is crucial to ensure that the information is accurate and up-to-date.
2. **Data Security**: Handling sensitive documents requires robust security measures to protect user data.
3. **Rate Limiting**: OpenAI API has limitations on the number of API calls, which could limit the chatbot's availability.

---

For more information or to contribute to this project, please reach out to [Your Contact Information].

---

*This is a proposal and is subject to changes. Your feedback is appreciated.*
