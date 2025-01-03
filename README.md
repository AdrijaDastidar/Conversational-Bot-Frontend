# 🤖 Friendly Chatbot Frontend  

## Overview  
This project is the **Frontend** for the Friendly Chatbot, a web-based conversational AI interface. Built using **Next.js** and styled with **Tailwind CSS**, the chatbot provides users with a sleek, interactive chat experience. It communicates with a backend server to process user inputs and deliver intelligent, conversational responses.  

## ✨ Features  
- 🌟 **Interactive Chat Interface:** A user-friendly design with dynamic animations for an engaging experience.  
- 🎨 **Vibrant UI/UX:** Gradient backgrounds, glowing effects, and animated icons enhance the look and feel.  
- ⚡ **Real-time Typing Indicator:** Displays a typing animation when the bot is generating a response.  
- 💬 **Seamless Communication:** Fetches intelligent responses from the backend API.  
- 🧑‍💻 **Customizable Greetings:** Rotating greetings to make the experience more personalized and lively.  
- 🔒 **Secure API Requests:** Built-in configurations for secure and efficient API communication.  
- 🌍 **Cross-Browser Compatibility:** Ensures a smooth experience across modern browsers.  
- 📱 **Mobile-Friendly Design:** Optimized layouts for smaller screens.  

## 🛠️ Technology Stack  
- **Framework:** Next.js (React with server-side rendering)  
- **Styling:** Tailwind CSS  
- **Icons:** Lucide-React  
- **Components:** Custom reusable components for buttons, inputs, avatars, and cards  

## 🚀 Setup and Installation  

### 1️⃣ Clone the Repository  
```bash  
git clone https://github.com/your-username/friendly-chatbot-frontend.git  
cd friendly-chatbot-frontend  
```  

### 2️⃣ Install Dependencies  
Ensure you have **Node.js** installed, then run:  
```bash  
npm install  
```  

### 3️⃣ Start the Development Server  
```bash  
npm run dev  
```  
The application will be available at `http://localhost:3000`.  

### 4️⃣ Connect to the Backend  
The chatbot frontend is configured to send requests to the backend at `https://conversational-bot-backend.onrender.com/res`. Ensure the backend is running and accessible.  

## 📂 Project Structure  
```plaintext  
.  
├── components/             # Reusable UI components  
│   ├── ui/                 # Custom Button, Input, Avatar, etc.  
├── pages/                  # Next.js pages  
│   ├── index.js            # Main entry point  
│   ├── chat.js             # Chatbot component  
├── public/                 # Public assets  
│   └── img.png             # Chatbot avatar  
├── styles/                 # Global and custom styles  
├── package.json            # Dependencies and scripts  
└── README.md               # Project documentation  
```  

## 💡 Usage  
- **Starting a Chat:** Type your message in the input box and press the send button.  
- **Dynamic Greeting:** The header displays rotating friendly messages to welcome users.  
- **Interactive Responses:** Watch the bot's avatar glow and bounce as it responds.  

## 🛠️ Customization  

### 🔄 Change Greetings  
Modify the `greetings` array in the Chat component to customize the messages displayed in the header.  

### 🔗 API Endpoint  
Update the backend API endpoint in the fetch call inside `handleSubmit` if needed.  

### 🎨 Styling  
- Tailwind classes can be modified in the respective components for personalized designs.  
- Colors, animations, and shadows can be adjusted for unique branding.  

## 🌟 Future Enhancements  
- 🌐 **Add Multi-Language Support** for broader accessibility.  
- 📱 **Optimize for Mobile Responsiveness** to enhance user experience on various devices.  
- 🔌 **Integrations with Other Services** like chat logs or analytics.  
- 🤝 **Add Voice Interaction** for hands-free conversations.  
- 🛡️ **User Authentication** for a secure, personalized experience.  

## 🤝 Contributing  
1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature-name`.  
3. Commit your changes: `git commit -m 'Add feature'`.  
4. Push the branch: `git push origin feature-name`.  
5. Open a Pull Request.  

## 📜 License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.  

## 🙏 Acknowledgments  
- Thanks to the creators of **Next.js**, **Tailwind CSS**, and **Lucide Icons** for their amazing tools.  
- Inspired by the idea of creating meaningful and accessible conversational experiences.  

Enjoy building with the Friendly Chatbot! 🚀  

---
