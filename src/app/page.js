import Header from "@/components/common/Header";
import Services from "@/components/home/Services";
// import ViewAppointments from "@/components/home/ViewAppointments";
// import { AppointmentsProvider } from "@/context/AppointmentsContext";
// import ViewAppointments from "@/app/ViewAppointments"; // If you have this file

export default function Home() {
  return (
    // <AppointmentsProvider>
    <>
      <Header />
      <Services />
    </>
    /* <ViewAppointments />
    </AppointmentsProvider> */
  );
}
