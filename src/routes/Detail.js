import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const {location, history} = this.props;

    if(location.state === undefined) { //location.state가 없는 경우
      history.push('/');  //Home으로 이동
    }
  }

  render() {
    const {location} = this.props;
    if(location.state){
      return <span>{location.state.title}</span>;  //영화제목 출력
    } else{
      return null;  //원래면 state값이 없는걸로 나와서 title값을 못가져와서 오류가나는데 이렇게 null을 주면 오류가 나지않는다
    }
  }
}

export default Detail;