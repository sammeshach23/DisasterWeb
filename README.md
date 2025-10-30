# 🌐 DisasterNet

> 🛠️ A unified web and mobile platform that revolutionizes disaster management through **real-time reporting**, **AI-driven predictions**, and **community collaboration**.
---

## 🚨 Overview

**DisasterNet** is an innovative platform designed to streamline disaster management and response.  
It enables users to **report incidents in real-time**, **map resources**, **coordinate volunteers**, and **support transparent crowdfunding** — all from one place.  

By leveraging **AI-powered analytics** and **crowdsourced data**, DisasterNet enhances preparedness, response, and recovery during emergencies.

---

## ✨ Features

- 📍 **Real-time Incident Reporting** — Report emergencies directly through the app or web.  
- 🗺️ **Community Resource Mapping** — Locate shelters, hospitals, and relief centers quickly.  
- 🤝 **Volunteer Coordination** — Connect skilled volunteers to affected areas efficiently.  
- 💰 **Transparent Crowdfunding** — Support verified disaster relief campaigns.  
- 🧠 **AI-Driven Predictions** — Forecast resource and volunteer requirements using ML models.  
- 📊 **Data Dashboard** — Visualize and monitor disaster response metrics live.  

---

## 💡 Inspiration

Recent disasters revealed how fragmented communication and delayed responses worsen crisis outcomes.  
**DisasterNet** was built to bridge this gap — connecting **citizens**, **volunteers**, and **authorities** on a single platform for faster, smarter disaster management.

---

## ⚙️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | HTML, CSS, JavaScript, Bootstrap |
| **Backend** | Node.js, Express |
| **Database** | MongoDB |
| **Machine Learning** | Python, Pandas, Scikit-learn |
| **Cloud Platform** | AWS / Google Cloud |
| **APIs** | Geolocation APIs, Real-time Data APIs |
| **Tools** | GitHub, VS Code, Postman |

---

## 🧩 Architecture

```mermaid
flowchart TD
    A[User Report] --> B[Backend (Node.js + Express)]
    B --> C[MongoDB Database]
    B --> D[AI Prediction Model]
    D --> E[Response Recommendation]
    C --> F[Resource Mapping Dashboard]
    E --> F
    F --> G[Authorities / Volunteers]
```

---

## 🧠 How It Works

1. **Users report incidents** through web or mobile interfaces.  
2. Reports are **stored in MongoDB** and processed by the backend.  
3. The **AI model** predicts resource needs and volunteer allocation.  
4. A **real-time dashboard** displays all active incidents and relief efforts.  
5. **Authorities and volunteers** act on live data for coordinated response.  

Example predictive model equation:  
$$
R_t = \alpha D_t + \beta V_t + \gamma P_t
$$  
where  
- \(R_t\): Required resources  
- \(D_t\): Disaster severity  
- \(V_t\): Volunteer availability  
- \(P_t\): Population density  

---

## 🏆 Achievements

- 🥇 **Won the Internal SIH Hackathon** and **participated in the Regional Level SIH**.  
- 🏅 **Received appreciation in the SAP Hackathon** for innovation and social impact.  
- 💡 Built a **fully integrated disaster management platform** from scratch.  
- 🧠 Created a **predictive AI model** that improves decision-making in emergencies.  
- 🌍 Contributed to **UN SDG 11 — Sustainable Cities and Communities**.

---

## 🚀 Future Enhancements

- 🌐 Multilingual support for global accessibility.  
- 📡 IoT and satellite integration for faster disaster detection.  
- 🤖 Advanced AI models for predictive disaster prevention.  
- 🧭 Mobile-first optimization for low-connectivity regions.  
- 🕊️ Collaboration with NGOs and government bodies for deployment.  

---

## 🧪 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/DisasterNet.git
   cd DisasterNet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   CLOUD_API_KEY=your_cloud_key
   ```

4. **Run the application**
   ```bash
   npm start
   ```
   The app will be live at: **http://localhost:5000**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a **Pull Request** or **Issue** to help improve DisasterNet.

1. Fork the repo  
2. Create a new branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m "Add new feature"`  
4. Push: `git push origin feature-name`  
5. Open a Pull Request  

---

## 🌟 Acknowledgments

- Smart India Hackathon (SIH)  
- SAP Hackathon Team  
- Mentors and faculty of **Sri Eshwar College of Engineering**  

---

> “Technology cannot stop disasters, but it can prevent them from becoming catastrophes.”  
> — *The DisasterNet Team*

