import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const BookNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Books</h2>
        <PrimaryButton onClick={() => navigate("/admin/nav-book/create-book")}>
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default BookNav;
