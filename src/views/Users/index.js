import React, { useState } from 'react'
import { Table, Modal, Tag, Space } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        responsive: ['md'],
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        responsive: ['md'],
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
        responsive: ['lg'],
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
        responsive: ['lg'],
    },
];

const data = [{
    "key": 1,
    "name": "Kameko",
    "age": 98,
    "address": "06 Meadow Vale Crossing",
    "tags": ['developer', 'nice']
}, {
    "key": 2,
    "name": "Maison",
    "age": 10,
    "address": "78 Scofield Park",
    "tags": ['developer', 'nice']
}, {
    "key": 3,
    "name": "Cordy",
    "age": 99,
    "address": "15901 Basil Drive",
    "tags": ['developer', 'nice']
}, {
    "key": 4,
    "name": "Olenka",
    "age": 32,
    "address": "08059 Saint Paul Circle",
    "tags": ['developer', 'nice']
}, {
    "key": 5,
    "name": "Alissa",
    "age": 51,
    "address": "7 Holy Cross Lane",
    "tags": ['developer', 'nice']
}, {
    "key": 6,
    "name": "Rochelle",
    "age": 2,
    "address": "1193 Twin Pines Center",
    "tags": ['developer', 'nice']
}, {
    "key": 7,
    "name": "Adolphus",
    "age": 73,
    "address": "5 Rieder Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 8,
    "name": "Eddi",
    "age": 81,
    "address": "234 Arizona Place",
    "tags": ['developer', 'nice']
}, {
    "key": 9,
    "name": "Talbert",
    "age": 3,
    "address": "01855 Duke Circle",
    "tags": ['developer', 'nice']
}, {
    "key": 10,
    "name": "Joshia",
    "age": 23,
    "address": "7 Michigan Junction",
    "tags": ['developer', 'nice']
}, {
    "key": 11,
    "name": "Lynn",
    "age": 50,
    "address": "29 Ryan Plaza",
    "tags": ['developer', 'nice']
}, {
    "key": 12,
    "name": "Louis",
    "age": 45,
    "address": "85 Monterey Center",
    "tags": ['developer', 'nice']
}, {
    "key": 13,
    "name": "Derry",
    "age": 48,
    "address": "8 Eggendart Terrace",
    "tags": ['developer', 'nice']
}, {
    "key": 14,
    "name": "Vanny",
    "age": 64,
    "address": "66 Center Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 15,
    "name": "Aubrey",
    "age": 97,
    "address": "05 Westerfield Lane",
    "tags": ['developer', 'nice']
}, {
    "key": 16,
    "name": "Lynda",
    "age": 55,
    "address": "5509 Dexter Parkway",
    "tags": ['developer', 'nice']
}, {
    "key": 17,
    "name": "Romeo",
    "age": 95,
    "address": "9855 Muir Trail",
    "tags": ['developer', 'nice']
}, {
    "key": 18,
    "name": "Everard",
    "age": 21,
    "address": "03393 Lakewood Gardens Pass",
    "tags": ['developer', 'nice']
}, {
    "key": 19,
    "name": "Zebedee",
    "age": 18,
    "address": "01987 Talmadge Circle",
    "tags": ['developer', 'nice']
}, {
    "key": 20,
    "name": "Stacey",
    "age": 30,
    "address": "63 Fordem Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 21,
    "name": "Alaine",
    "age": 75,
    "address": "932 Homewood Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 22,
    "name": "Tabor",
    "age": 7,
    "address": "58798 Rutledge Way",
    "tags": ['developer', 'nice']
}, {
    "key": 23,
    "name": "Philippa",
    "age": 27,
    "address": "28 Muir Pass",
    "tags": ['developer', 'nice']
}, {
    "key": 24,
    "name": "Toby",
    "age": 19,
    "address": "43 Kropf Terrace",
    "tags": ['developer', 'nice']
}, {
    "key": 25,
    "name": "Alva",
    "age": 41,
    "address": "77 Mallard Point",
    "tags": ['developer', 'nice']
}, {
    "key": 26,
    "name": "Piper",
    "age": 54,
    "address": "72669 Sommers Road",
    "tags": ['developer', 'nice']
}, {
    "key": 27,
    "name": "Dieter",
    "age": 45,
    "address": "5 School Hill",
    "tags": ['developer', 'nice']
}, {
    "key": 28,
    "name": "Irita",
    "age": 24,
    "address": "1565 Nelson Hill",
    "tags": ['developer', 'nice']
}, {
    "key": 29,
    "name": "Gorden",
    "age": 24,
    "address": "61 Bluejay Terrace",
    "tags": ['developer', 'nice']
}, {
    "key": 30,
    "name": "Jermaine",
    "age": 7,
    "address": "070 Del Sol Way",
    "tags": ['developer', 'nice']
}, {
    "key": 31,
    "name": "Domingo",
    "age": 85,
    "address": "6 Kensington Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 32,
    "name": "Susana",
    "age": 92,
    "address": "112 Arrowood Point",
    "tags": ['developer', 'nice']
}, {
    "key": 33,
    "name": "Sammie",
    "age": 77,
    "address": "80292 Helena Hill",
    "tags": ['developer', 'nice']
}, {
    "key": 34,
    "name": "Cherilyn",
    "age": 80,
    "address": "6548 Loftsgordon Terrace",
    "tags": ['developer', 'nice']
}, {
    "key": 35,
    "name": "Kinny",
    "age": 62,
    "address": "3908 Orin Junction",
    "tags": ['developer', 'nice']
}, {
    "key": 36,
    "name": "Glad",
    "age": 50,
    "address": "74502 South Lane",
    "tags": ['developer', 'nice']
}, {
    "key": 37,
    "name": "Callie",
    "age": 36,
    "address": "71898 Alpine Trail",
    "tags": ['developer', 'nice']
}, {
    "key": 38,
    "name": "Sunshine",
    "age": 35,
    "address": "0079 Becker Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 39,
    "name": "Meris",
    "age": 1,
    "address": "4186 Moulton Court",
    "tags": ['developer', 'nice']
}, {
    "key": 40,
    "name": "Feodor",
    "age": 1,
    "address": "06 Shelley Plaza",
    "tags": ['developer', 'nice']
}, {
    "key": 41,
    "name": "Nelson",
    "age": 2,
    "address": "3 Cascade Center",
    "tags": ['developer', 'nice']
}, {
    "key": 42,
    "name": "Waylan",
    "age": 44,
    "address": "205 West Way",
    "tags": ['developer', 'nice']
}, {
    "key": 43,
    "name": "Karlis",
    "age": 83,
    "address": "6 Bashford Junction",
    "tags": ['developer', 'nice']
}, {
    "key": 44,
    "name": "Joly",
    "age": 4,
    "address": "25443 Dwight Pass",
    "tags": ['developer', 'nice']
}, {
    "key": 45,
    "name": "Tiphany",
    "age": 75,
    "address": "8648 Hallows Court",
    "tags": ['developer', 'nice']
}, {
    "key": 46,
    "name": "Maura",
    "age": 3,
    "address": "7543 Rigney Circle",
    "tags": ['developer', 'nice']
}, {
    "key": 47,
    "name": "Georgette",
    "age": 75,
    "address": "02372 Farwell Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 48,
    "name": "Betta",
    "age": 75,
    "address": "64 Westport Crossing",
    "tags": ['developer', 'nice']
}, {
    "key": 49,
    "name": "Rodger",
    "age": 54,
    "address": "0 Caliangt Way",
    "tags": ['developer', 'nice']
}, {
    "key": 50,
    "name": "Aldridge",
    "age": 92,
    "address": "7296 Kropf Court",
    "tags": ['developer', 'nice']
}, {
    "key": 51,
    "name": "Fritz",
    "age": 75,
    "address": "5 Commercial Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 52,
    "name": "Abigael",
    "age": 38,
    "address": "1 Linden Terrace",
    "tags": ['developer', 'nice']
}, {
    "key": 53,
    "name": "Richart",
    "age": 79,
    "address": "97758 Norway Maple Pass",
    "tags": ['developer', 'nice']
}, {
    "key": 54,
    "name": "Erhart",
    "age": 75,
    "address": "75 Burning Wood Crossing",
    "tags": ['developer', 'nice']
}, {
    "key": 55,
    "name": "Flemming",
    "age": 63,
    "address": "526 Clove Point",
    "tags": ['developer', 'nice']
}, {
    "key": 56,
    "name": "Kirbie",
    "age": 60,
    "address": "444 Southridge Pass",
    "tags": ['developer', 'nice']
}, {
    "key": 57,
    "name": "Maude",
    "age": 100,
    "address": "4 South Crossing",
    "tags": ['developer', 'nice']
}, {
    "key": 58,
    "name": "Harmon",
    "age": 44,
    "address": "8 Bonner Place",
    "tags": ['developer', 'nice']
}, {
    "key": 59,
    "name": "Locke",
    "age": 97,
    "address": "5 Loomis Terrace",
    "tags": ['developer', 'nice']
}, {
    "key": 60,
    "name": "Findlay",
    "age": 8,
    "address": "8531 7th Lane",
    "tags": ['developer', 'nice']
}, {
    "key": 61,
    "name": "Cy",
    "age": 44,
    "address": "29 Troy Road",
    "tags": ['developer', 'nice']
}, {
    "key": 62,
    "name": "Timi",
    "age": 54,
    "address": "3 Petterle Parkway",
    "tags": ['developer', 'nice']
}, {
    "key": 63,
    "name": "Victoir",
    "age": 57,
    "address": "4 Scoville Street",
    "tags": ['developer', 'nice']
}, {
    "key": 64,
    "name": "Nissy",
    "age": 78,
    "address": "4256 School Junction",
    "tags": ['developer', 'nice']
}, {
    "key": 65,
    "name": "Wendell",
    "age": 12,
    "address": "47 Pawling Lane",
    "tags": ['developer', 'nice']
}, {
    "key": 66,
    "name": "Grissel",
    "age": 98,
    "address": "400 Haas Road",
    "tags": ['developer', 'nice']
}, {
    "key": 67,
    "name": "Rab",
    "age": 31,
    "address": "6 Glacier Hill Point",
    "tags": ['developer', 'nice']
}, {
    "key": 68,
    "name": "Dyna",
    "age": 48,
    "address": "7652 Hudson Junction",
    "tags": ['developer', 'nice']
}, {
    "key": 69,
    "name": "Cathie",
    "age": 88,
    "address": "91971 Kipling Circle",
    "tags": ['developer', 'nice']
}, {
    "key": 70,
    "name": "Bessie",
    "age": 40,
    "address": "6118 Valley Edge Way",
    "tags": ['developer', 'nice']
}, {
    "key": 71,
    "name": "Winny",
    "age": 1,
    "address": "185 Eliot Avenue",
    "tags": ['developer', 'nice']
}, {
    "key": 72,
    "name": "Ingaberg",
    "age": 52,
    "address": "86386 Norway Maple Crossing",
    "tags": ['developer', 'nice']
}, {
    "key": 73,
    "name": "Stanislas",
    "age": 11,
    "address": "54 Kingsford Street",
    "tags": ['developer', 'nice']
}, {
    "key": 74,
    "name": "Seumas",
    "age": 36,
    "address": "6 Anhalt Terrace",
    "tags": ['developer', 'nice']
}, {
    "key": 75,
    "name": "Aldus",
    "age": 26,
    "address": "62 Dapin Court",
    "tags": ['developer', 'nice']
}, {
    "key": 76,
    "name": "Dennet",
    "age": 49,
    "address": "51 Tony Plaza",
    "tags": ['developer', 'nice']
}, {
    "key": 77,
    "name": "Heather",
    "age": 63,
    "address": "68751 Spohn Drive",
    "tags": ['developer', 'nice']
}, {
    "key": 78,
    "name": "Moreen",
    "age": 97,
    "address": "25473 Emmet Road",
    "tags": ['developer', 'nice']
}, {
    "key": 79,
    "name": "Shea",
    "age": 53,
    "address": "9292 Hanover Center",
    "tags": ['developer', 'nice']
}, {
    "key": 80,
    "name": "Ingemar",
    "age": 6,
    "address": "6480 Oakridge Parkway",
    "tags": ['developer', 'nice']
}, {
    "key": 81,
    "name": "Dav",
    "age": 20,
    "address": "654 Crownhardt Pass",
    "tags": ['developer', 'nice']
}, {
    "key": 82,
    "name": "Carin",
    "age": 79,
    "address": "80 Lerdahl Crossing",
    "tags": ['developer', 'nice']
}, {
    "key": 83,
    "name": "Jeannie",
    "age": 25,
    "address": "7592 Birchwood Center",
    "tags": ['developer', 'nice']
}, {
    "key": 84,
    "name": "Northrup",
    "age": 91,
    "address": "3546 Bashford Avenue",
    "tags": ['developer', 'nice']
}, {
    "key": 85,
    "name": "Patricia",
    "age": 14,
    "address": "16571 Donald Drive",
    "tags": ['developer', 'nice']
}, {
    "key": 86,
    "name": "Milissent",
    "age": 40,
    "address": "98 Oak Valley Drive",
    "tags": ['developer', 'nice']
}, {
    "key": 87,
    "name": "Waylin",
    "age": 45,
    "address": "6 Goodland Junction",
    "tags": ['developer', 'nice']
}, {
    "key": 88,
    "name": "Ulrike",
    "age": 87,
    "address": "567 Anthes Way",
    "tags": ['developer', 'nice']
}, {
    "key": 89,
    "name": "Josi",
    "age": 87,
    "address": "10 Clemons Hill",
    "tags": ['developer', 'nice']
}, {
    "key": 90,
    "name": "Urbain",
    "age": 9,
    "address": "8353 Pankratz Park",
    "tags": ['developer', 'nice']
}, {
    "key": 91,
    "name": "Lauraine",
    "age": 5,
    "address": "54 Anzinger Alley",
    "tags": ['developer', 'nice']
}, {
    "key": 92,
    "name": "Blake",
    "age": 72,
    "address": "95806 Logan Point",
    "tags": ['developer', 'nice']
}, {
    "key": 93,
    "name": "Neale",
    "age": 69,
    "address": "0403 Logan Plaza",
    "tags": ['developer', 'nice']
}, {
    "key": 94,
    "name": "Iain",
    "age": 64,
    "address": "673 Grasskamp Hill",
    "tags": ['developer', 'nice']
}, {
    "key": 95,
    "name": "Dominick",
    "age": 60,
    "address": "30503 Debra Way",
    "tags": ['developer', 'nice']
}, {
    "key": 96,
    "name": "Avrom",
    "age": 3,
    "address": "68 Vera Drive",
    "tags": ['developer', 'nice']
}, {
    "key": 97,
    "name": "Rabbi",
    "age": 72,
    "address": "25 Packers Place",
    "tags": ['developer', 'nice']
}, {
    "key": 98,
    "name": "Elbertine",
    "age": 72,
    "address": "883 David Drive",
    "tags": ['developer', 'nice']
}, {
    "key": 99,
    "name": "Herculie",
    "age": 57,
    "address": "96192 Amoth Hill",
    "tags": ['developer', 'nice']
}, {
    "key": 100,
    "name": "Hobey",
    "age": 24,
    "address": "11 Barnett Street",
    "tags": ['developer', 'nice']
}]



export default function Users() {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = e => {
        console.log(e);
        setVisible(false)
    };

    const handleCancel = e => {
        setVisible(false)
    };
    return (
        <>
            <Table onRow={(data, index) => {
                return {
                    onClick: event => { console.log(data, index) },
                    onDoubleClick: event => { showModal() }
                }

            }} columns={columns} dataSource={data} />
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>123</div>
            </Modal>
        </>
    )
}
