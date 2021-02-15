import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import ListItem from './ListItem'
import '../../documentarylist.css';

const items = [
    {
        id: 1,
        name: 'ARoom 237',
        view: '2,154,134',
        like: '1,234',
        comment: '34'
    },
    {
        id: 2,
        name: 'BRoom 237',
        view: '3,154,134',
        like: '2,234',
        comment: '44'
    },
    {
        id: 3,
        name: 'DRoom 237',
        view: '4,154,134',
        like: '1,034',
        comment: '54'
    },
    {
        id: 4,
        name: 'CRoom 237',
        view: '4,254,134',
        like: '6,234',
        comment: '14'
    },
];


function ListItems(props) {

    const [listItems, setListItems] = useState([]);
    const [viewList, setViewList] = useState([]);

    function changeList() {

        const lItems = listItems.map((item, index) => {
            return (<ListItem key={item.id} item={item} ></ListItem>);
        }).slice();

        setViewList(lItems);
    }

    useEffect(() => {
        updateList();
    }, [props.alg,listItems])

    function updateList() {
        let sortedItems = [];
        if (props.alg != null) {
            
            if (props.alg.value == 'sort-name') {
                sortedItems = items.sort((a, b) => {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                });
                //setListItems(sortedItems);
            }
            else if (props.alg.value == 'sort-view') {

                sortedItems = items.sort((a, b) => {
                    if (a.view > b.view) { return -1; }
                    if (a.view < b.view) { return 1; }
                    return 0;
                });

                //setListItems(sortedItems);

            }
            else if (props.alg.value == 'sort-like') {

                sortedItems = items.sort((a, b) => {
                    if (a.like > b.like) { return -1; }
                    if (a.like < b.like) { return 1; }
                    return 0;
                });

                //setListItems(sortedItems);

            }
            else if (props.alg.value == 'sort-comment') {

                sortedItems = items.sort((a, b) => {
                    if (a.comment > b.comment) { return -1; }
                    if (a.comment < b.comment) { return 1; }
                    return 0;
                });

                //setListItems(sortedItems);

            }
            else {

                sortedItems = items.sort((a, b) => {
                    if (a.id < b.id) { return -1; }
                    if (a.id > b.id) { return 1; }
                    return 0;
                });
                //setListItems(sortedItems);
            }

        }
        else{
            sortedItems = items;
        }

        setListItems(sortedItems);
        changeList();
    }

    return (<Container className="mx-5 my-5" style={{ width: '60%' }}>
        {viewList}
    </Container>);

}

export default ListItems;

