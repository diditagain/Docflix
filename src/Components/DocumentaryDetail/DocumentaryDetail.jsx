import React from 'react'
import {
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';
import { Button, Container, Row, Col, ButtonGroup, Image } from "react-bootstrap";
import DocumentaryDetailPlayer from './Player'
import dataset from '../../data/documentraies'
import ListItem from '../DocumentaryList/ListItem'

function DocumentaryDetail(props) {
    let { dID } = useParams();
    const item = dataset.find((it) => it.id == dID);
    const recommendations = dataset.filter((it) => it.category == item.category && it.id != item.id).slice(0,3);    
    const view = recommendations.map((it) => {
        return (
            <Link to={`/documentaries/${it.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <div className="row">
                    <div className="col">
                        <Image fluid src={it.img} className="d-block mx-auto my-2" style={{ width: '160px', height: '110px' }}></Image>
                    </div>
                    <div className="col">
                        <h6 className="text-center">{it.name}</h6>
                        <p className="small">{it.description.slice(0, 75) + "..."}</p>
                    </div>
                </div>
            </Link>
        );
    })

    const design = (
        <div className="container">
            <ListItem item={item}></ListItem>
            <div className="row mt-5">
                <div className="col">
                    <DocumentaryDetailPlayer item={item}></DocumentaryDetailPlayer>
                </div>
                <div className="col">
                    {view}
                </div>
            </div>

        </div>)
    return (<>
        {design}
    </>)
}

export default DocumentaryDetail;