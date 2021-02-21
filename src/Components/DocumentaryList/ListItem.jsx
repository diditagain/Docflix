import { React } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCommentAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import '../../documentarylist.css';

function ListItem(props) {
    const item = props.item;
    const listItem = (
            <Row className="list-item my-2" style={{ cursor: 'pointer' }} onClick={() => {
            console.log("Clicked!");
        }}>
            <Col xs={12} sm={12} md={12} lg={3} className="my-auto">
                <div className="item-cover mx-auto">
                    <Image fluid src="https://picsum.photos/id/444/200/300" className="d-block"></Image>
                    <div className="item-cover-time">12:24</div>
                </div>

            </Col>
            <Col md={12} lg={9}>
                <h2 >{item.name}</h2>
                <div className="w-75 bg-dark mx-auto" style={{ height: "2px" }}></div>
                <Row className="my-2">
                    <Col sm={12} md={3} xl={2} className="my-2">
                        <Row className="px-auto mx-auto">
                            <Col xs={4} sm={4} md={12}  className="d-flex justify-content-start mb-1">
                                <FontAwesomeIcon icon={faEye} size='sm' />
                                <span className="text-muted mx-2 my-auto" style={{ fontSize: '12px' }}>{item.view}</span>
                            </Col>
                            <Col xs={4} sm={4} md={12} className="d-flex justify-content-start mb-1">
                                <FontAwesomeIcon icon={faHeart} size='sm' />
                                <span className="text-muted mx-2 my-auto" style={{ fontSize: '12px' }}>{item.like}</span>
                            </Col>
                            <Col xs={4} sm={4} md={12}  className="d-flex justify-content-start mb-1">
                                <FontAwesomeIcon icon={faCommentAlt} size='sm' />
                                <span className="text-muted mx-2 my-auto" style={{ fontSize: '12px' }}>{item.comment}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={9} xl={10} style={{ fontSize: '12px' }}>
                        <p className="mx-auto " >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

    return (<>
        {listItem}
    </>);

}

export default ListItem;
