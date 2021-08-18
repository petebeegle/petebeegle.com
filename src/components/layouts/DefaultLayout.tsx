import Header from '@module/Header/Header';
import Footer from '@module/Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props): JSX.Element => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex-grow">{children}</div>
    <Footer />
  </div>
);

export default DefaultLayout;
