import { React, useEffect, useState, useRef } from 'react'
import Select from 'react-select'
import { useTranslation } from "react-i18next";
import i18next from "../../i18next";
const tr = [{
    "sortTypes": [
        "Önerilen",
        "İsme göre",
        "İzlenmeye göre ",
        "Beğeniye göre",
        "Yorum sayısına göre"
    ]
}];

const en = [{
    "sortTypes": [
        "Recommended",
        "By Name",
        "By View",
        "By Like",
        "By Comment"
    ]
}];

// const options = [
//     { value: 'sort-id', label: 'By ID', isDescending: false },
//     { value: 'sort-name', label: 'By Name', isDescending: false  },
//     { value: 'sort-view', label: 'By View', isDescending: true  },
//     { value: 'sort-like', label: 'By Like', isDescending: true  },
//     { value: 'sort-comment', label: 'By Comment', isDescending: true  },
// ];

const customStyles = {
    control: styles => (
        {
            ...styles,
            backgroundColor: '#073b4c',
            borderRadius: 0,
            minHeight: '30px',
            height: '30px',
            border: '0 !important',
            // This line disable the blue border

            textAlign: 'center',
            boxShadow: '0 !important',
            '&:hover': {
                border: '0 !important'
            }
        }
    ),
    option: (base, state) => ({
        ...base,
        color: state.isSelected ? "black" : "light",
        borderRadius: 0,
        fontSize: 12,
        transition: 'all .5s ease',
        animation: "fadeIn 0.35s ease-in-out",
        border: '0 !important',
        // This line disable the blue border
        boxShadow: '0 !important',
        '&:hover': {
            border: '0 !important',
            backgroundColor: "#f8961e",
            color: "black"
        },
        backgroundColor: state.isSelected ? "white" : "#355070",
        ':active': {
            // backgroundColor: state.isSelected ? "blue" : "blue"
        },
        ':hover': {
            backgroundColor: "#f8961e"
        }
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '30px',
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
        hyphens: "auto",
        // kill the gap
        border: 0,
        animation: "fadeIn 0.35s ease-in-out",
        margin: 0,
        textAlign: "left",
        backgroundColor: '#282c34',
        // prevent menu to scroll y
        wordWrap: "break-word"
    }),
    menuList: (provided, state) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    singleValue: base => ({
        fontSize: 14,
        marginBottom: 10,
        color: "white"
    }),


};



function SortingDropdown(props) {

    const inputEl = useRef(null);
    const [index, setIndex] = useState(0);

    const { t } = useTranslation();
    const options = [
        { value: 'sort-id', label: t("sortTypes.Recommended"), isDescending: false },
        { value: 'sort-name', label: t("sortTypes.ByName"), isDescending: false },
        { value: 'sort-view', label: t("sortTypes.ByView"), isDescending: true },
        { value: 'sort-like', label: t("sortTypes.ByLike"), isDescending: true },
        { value: 'sort-comment', label: t("sortTypes.ByComment"), isDescending: true },
    ];


    const handleChange = (s) => {
        const i = options.indexOf(s);
        setIndex(i);
        props.change(s);
    }

    const sortingDropdown = (<div className="mt-4" style={{ width: "200px" }}>
        <Select
            ref={inputEl}
            defaultValue={options[index]}
            value={options[index]}
            label="Single select"
            options={options}
            isSearchable={false}
            onChange={handleChange}
            styles={customStyles}

        />
    </div>);

    return (<>{sortingDropdown}</>);
}


export default SortingDropdown;