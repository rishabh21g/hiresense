import { InterviewContextProvider } from "@/context/InterviewDataContext";

export default function Layout({ children }) {
  return (
    <InterviewContextProvider>
      {children}
    </InterviewContextProvider>
  );
}
