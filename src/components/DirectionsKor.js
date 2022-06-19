import naverMap from '../images/naver-map.jpg';

const DirectionsKor = () => {
    return (
        <>
            <div className="row row-content">
                    <div className="mt-2 col col-lg-10 offset-lg-1">
                        <div id="map-div">
                            <a href="http://naver.me/FbuUuNWa" target="_blank"><img id='naver-map' src={naverMap} /></a>
                        </div>
                    </div>
                </div>
                <div className="row row-content mt-5">
                    <div className="col col-lg-10 offset-lg-1">
                        <h3 className="text-center">가장 가까운 지하철역:  <b>청담역</b></h3>
                        <h4 className="text-center">예상 이동시간: <b>10</b>분</h4>
                    </div>
                </div>
                <div className="row row-content mb-4">
                    <div className="mt-3 col col-lg-10 offset-lg-1">
                        <div id="subway-directions">
                        <h4>청담역에서 오시는 길:</h4>
                        <ol>
                            <li>10번 출구로 나오세요.</li>
                            <li>약 12m 직진하고 사거리에서 오른쪽으로 돌고 가세요.</li>
                            <li>약 60m 앞으로 직진하세요.</li>
                            <li>저의 건물은 오른쪽에 위치해 있습니다.</li>
                            <li>바로 옆 건물은 스타쉽엔터테인먼트를 지나가서 건물 앞문으로 들어오세요.</li>
                            <li>건물 앞문으로 들어오면 저희 카페는 첫번째 왼쪽 문입니다.</li>
                        </ol>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row row-content">
                    <div className="mt-4 col col-lg-10 offset-lg-1">
                        <h3 className="text-center">가장 가까운 버스정류장:  <b>청담치안센터</b></h3>
                        <h4 className="text-center">예상 이동시간: <b>4</b>분</h4>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="mt-3 col col-lg-10 offset-lg-1">
                        <div id="bus-directions">
                        <h4>청담치안센터 정류장에서 오시는 길:</h4>
                        <ol>
                            <li>버르를 내리자 오른쪽으로 돌고 직진하세요.</li>
                            <li>약 8m 직진하세요.</li>
                            <li>저의 카페의 건물은 호텔엔트라라는 건물 옆에 있습니다.</li>
                            <li>호텔 건물 지나가서 저희 건물 앞문으로 들어오세요.</li>
                            <li>건물 앞문으로 들어오면 저희 카페는 첫번째 왼쪽 문입니다.</li>
                        </ol>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default DirectionsKor;