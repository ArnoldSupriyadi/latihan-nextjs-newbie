const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <div style={{ height: 300, width: 500, background: "brown" }}>
          <h2>Layout User</h2>
          {children}
        </div>
      </>
    );
  };
  
  export default Layout;
  