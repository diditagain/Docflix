import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import ListItem from './ListItem'
import '../../documentarylist.css';



function sortBy(field, isDescending) {


    return function(a,b){
        let x = a[field]
        let y = b[field];
        if(!isNaN(a[field]) && !isNaN(b[field])){
            x = Number(a[field]);
            y = Number(b[field]);
        }
        
        if (isDescending != true) {
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        }
        else {
            if (x > y) { return -1; }
            if (x < y) { return 1; }
            return 0;
        }
    }
}

function ListItems(props) {

    const [listItems, setListItems] = useState([]);
    const [viewList, setViewList] = useState([]);


    const items = props.searchResult;
    
    function changeList() {

        const lItems = listItems.map((item, index) => {
            return (<ListItem key={item.id} item={item} ></ListItem>);
        }).slice();

        setViewList(lItems);
    }

    useEffect(() => {
        setListItems(props.searchResult);
        updateList();
    }, [props.alg, listItems])

    function updateList() {
        let sortedItems = [];
        if (props.alg != null) {
            const val = props.alg.value.substring(props.alg.value.indexOf('-')+1);
            sortedItems = items.sort((sortBy(val,props.alg.isDescending)));
        }
        else {
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

