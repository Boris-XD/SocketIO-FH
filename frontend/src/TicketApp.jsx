import { UIProvider } from "./context/UIContext";
import RouterPage from "./pages/RouterPage";

const TicketApp = () => {
  return (
    <UIProvider>
      <RouterPage />
    </UIProvider>
  );
};

export default TicketApp;
