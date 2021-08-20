import { useDispatch } from "react-redux";
import { setNotification } from "../Redux/Action/Notification/notificationActions";
import { useEffect, useRef, useState } from "react";
import { iNotification } from "../Redux/types";

const Notification: React.FC<iNotification> = ({ message, type }) => {
  const [notificationMsg, setNotificationMsg] = useState("");
  const [notificationClass, setNotificationClass] = useState("notify");
  const dispatch = useDispatch();
  const notificationEl = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  // Add class to element based on notification type
  const addTypeClass = () => {
    if (type === "success") {
      setNotificationClass("alert-success");
    }
    if (type === "danger") {
      setNotificationClass("alert-danger");
    }
    if (type === "warning") {
      setNotificationClass("alert-warning");
    }
  };

  // Update notification when message changes
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      if (notificationEl.current) {
        notificationEl.current.style.opacity = "0";
      }
      setTimeout(() => {
        setNotificationMsg(message);
        addTypeClass();
        setTimeout(() => {
          if (notificationEl.current) {
            notificationEl.current.style.opacity = "1";
            timeout.current = setTimeout(() => {
              removeNotification();
            }, 5000);
          }
        }, 20);
      }, 300);
    } else {
      setNotificationMsg(message);
      addTypeClass();
      setTimeout(() => {
        if (notificationEl.current) {
          notificationEl.current.style.opacity = "1";
          timeout.current = setTimeout(() => {
            removeNotification();
          }, 5000);
        }
      }, 20);
    }
    // eslint-disable-next-line
  }, [message]);

  // Remove notification
  const removeNotification = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (notificationEl.current) {
      notificationEl.current.style.opacity = "0";
    }
    setTimeout(() => {
      dispatch(setNotification({ message: "", type: "success" }));
    }, 300);
  };

  const output = (
    
    <div className={`alert ${notificationClass} alert-dismissible fade show`} role="alert" onClick={() => removeNotification()}>
        {notificationMsg}
    <button className="btn btn-close" data-bs-dismiss="alert" aria-label="Close"/>
    </div>
  );

  return output;
};

export default Notification;
