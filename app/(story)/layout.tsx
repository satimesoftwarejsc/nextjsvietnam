const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main
        className="mx-auto w-full xl:max-w-7xl md:max-w-3xl sm:max-w-xl py-4"
        // style={{ paddingLeft: "auto", paddingRight: "auto" }}
      >
        {children}
      </main>
    </>
  );
};

export default layout;
