import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const NewShoeCollections = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Shoe Collections</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/newShoeCollections/create-ShoeCollection")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default NewShoeCollections;
