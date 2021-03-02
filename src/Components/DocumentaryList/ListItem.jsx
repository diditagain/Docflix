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
                    <Image  src={item.img} className="d-block list"></Image>
                    <div className="item-cover-time">{item.duration}</div>
                </div>

            </Col>
            <Col md={12} lg={9}>
                <h2 className="text-center">{item.name}</h2>
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
                            {item.description}
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
