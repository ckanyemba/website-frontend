import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const SculptureNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Sculpture</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/nav-sculpture/create-sculpture")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default SculptureNav;
