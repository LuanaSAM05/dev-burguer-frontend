import { Outlet } from "react-router-dom";
import { SideNavAdmin } from "../../components";
import { Container } from "./styles";

export function AdminLayout() {
  return (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  );
}