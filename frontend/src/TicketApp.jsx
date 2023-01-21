import { SocketProvider } from "./context/SocketContext";
import { UIProvider } from "./context/UIContext";
import RouterPage from "./pages/RouterPage";

const TicketApp = () => {
  return (
    <SocketProvider>
      <UIProvider>
        <RouterPage />
      </UIProvider>
    </SocketProvider>
  );
};

export default TicketApp;
