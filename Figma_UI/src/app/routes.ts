import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import PreClaimPreview from "./pages/PreClaimPreview";
import SmartCallCompanion from "./pages/SmartCallCompanion";
import IntelligentEmailTriage from "./pages/IntelligentEmailTriage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/pre-claim-preview",
    Component: PreClaimPreview,
  },
  {
    path: "/smart-call-companion",
    Component: SmartCallCompanion,
  },
  {
    path: "/intelligent-email-triage",
    Component: IntelligentEmailTriage,
  },
]);
