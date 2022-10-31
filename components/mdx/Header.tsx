const Header = {
  H1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100">
      {children}
    </h1>
  ),
  H2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100">
      {children}
    </h2>
  ),
};

export default Header;
