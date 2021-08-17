import Header from '@module/Header/Header';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props): JSX.Element => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex-grow">{children}</div>
  </div>
);

export default DefaultLayout;
