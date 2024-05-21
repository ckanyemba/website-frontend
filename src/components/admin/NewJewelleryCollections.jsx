import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const NewJewelleryCollections = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Jewellery Collections</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/newjewelleryCollections/create-jewelleryCollection")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default NewJewelleryCollections;
