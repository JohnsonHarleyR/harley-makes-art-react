import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const ViewItem = ({
  navigateTo,
  prevPath,
}) => {

  let {itemId} = useParams();
  if (!itemId) {
    console.log(`itemId? `, itemId);
    navigateTo(prevPath);
  }

  return (
    <></>
  );
}


const mapStateToProps = ({}) => {
  return {

  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ViewItem);