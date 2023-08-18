const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main
        className="container py-4"
        // style={{ paddingLeft: "auto", paddingRight: "auto" }}
      >
        {children}
      </main>
    </>
  );
};

export default layout;
