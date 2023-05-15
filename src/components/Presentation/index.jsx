import Description from '../Description';
import Footer from '../Footer';
import Header from '../Header';
import Lines from '../Lines';
import './style.scss';

function Presentation() {
  return (
    <div id='page-presentation' className="Presentation">
      <Lines />
      <Header />
      <Description />
      <Footer />
    </div>
  );
}

export default Presentation;
