import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Timeline from "./pages/Timeline";
import OnePostPage from "./pages/OnePostPage";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  useEffect(() => {
    if ("Notification" in window) {
      // 通知が許可されていたら早期リターン
      const permission = Notification.permission;
      if (permission === "denied" || permission === "granted") {
        return;
      }
      // 通知の許可を求める
      Notification.requestPermission().then(() => new Notification("テスト"));
    }
  }, []);

  const handlePushNotif = () => {
    if ("Notification" in window) {
      const notif = new Notification("今日の自炊を記録してください！");
      notif.addEventListener("show", () => {
        // 状態によって音の有無を変える
        new Audio("./se.wav").play();
      });
    }
  };

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
      handlePushNotif();
      //通知の間隔
    }, 100000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/timeline/:id" element={<Timeline />} />
                <Route path="/onePostPage" element={<OnePostPage />} />
                <Route path="/onePostPage/:id" element={<OnePostPage />} />
              </Routes>
            </Navbar>
          </div>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;