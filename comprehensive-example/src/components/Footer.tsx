
const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-2 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://github.com/Mruruc">#ManageUser</a>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
