// Register the grid component
Vue.component('table-grid', {
    template: '#grid-template',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1;
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredData: function () {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            if (filterKey) {
                data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
                    });
                });
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
            return data;
        }
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        }
    }
});

// Bootstrap the table
var vm = new Vue({
    el: '#v-main',
    data: {
        searchQueryMainCalendarTable: '',
        gridColumnsUpcommingTable: ['Fav_Coin', 'Symbol', 'Coin_Name', 'Fav_Event', 'Event', 'Location', 'Date'],
        gridDataUpcommingTable: [
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/BTC-logo.png"><br /><span class="ico-short-name">BTC</span>', 
                Coin_Name: '<span class="ico-full-name">Bitcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/BTH-logo.png"><br /><span class="ico-short-name">BTH</span>', 
                Coin_Name: '<span class="ico-full-name">Bytether</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Conference</span>', 
                Location: '<span class="city-location">Bucharest</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/DASH-logo.png"><br /><span class="ico-short-name">DASH</span>', 
                Coin_Name: '<span class="ico-full-name">Darkcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Exchanges</span>', 
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETC-logo.png"><br /><span class="ico-short-name">ETC</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum Classic</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Siberia</span><br /><span class="country-location">URSS</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETH-logo.png"><br /><span class="ico-short-name">ETH</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/LTC-logo.png"><br /><span class="ico-short-name">LTC</span>', 
                Coin_Name: '<span class="ico-full-name">Litecoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/MIOTA-logo.png"><br /><span class="ico-short-name">MIOTA</span>', 
                Coin_Name: '<span class="ico-full-name">Miota</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Conference</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/NEO-logo.png"><br /><span class="ico-short-name">NEO</span>', 
                Coin_Name: '<span class="ico-full-name">NEO</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Exchanges</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETH-logo.png"><br /><span class="ico-short-name">ETH</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/LTC-logo.png"><br /><span class="ico-short-name">LTC</span>', 
                Coin_Name: '<span class="ico-full-name">Litecoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Exchanges</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/MIOTA-logo.png"><br /><span class="ico-short-name">MIOTA</span>', 
                Coin_Name: '<span class="ico-full-name">Miota</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/NEO-logo.png"><br /><span class="ico-short-name">NEO</span>', 
                Coin_Name: '<span class="ico-full-name">NEO</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/BTC-logo.png"><br /><span class="ico-short-name">BTC</span>', 
                Coin_Name: '<span class="ico-full-name">Bitcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Conference</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/BTH-logo.png"><br /><span class="ico-short-name">BTH</span>', 
                Coin_Name: '<span class="ico-full-name">Bytether</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/DASH-logo.png"><br /><span class="ico-short-name">DASH</span>', 
                Coin_Name: '<span class="ico-full-name">Darkcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETC-logo.png"><br /><span class="ico-short-name">ETC</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum Classic</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Conference</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETH-logo.png"><br /><span class="ico-short-name">ETH</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/LTC-logo.png"><br /><span class="ico-short-name">LTC</span>', 
                Coin_Name: '<span class="ico-full-name">Litecoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/MIOTA-logo.png"><br /><span class="ico-short-name">MIOTA</span>', 
                Coin_Name: '<span class="ico-full-name">Miota</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/NEO-logo.png"><br /><span class="ico-short-name">NEO</span>', 
                Coin_Name: '<span class="ico-full-name">NEO</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETH-logo.png"><br /><span class="ico-short-name">ETH</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/LTC-logo.png"><br /><span class="ico-short-name">LTC</span>', 
                Coin_Name: '<span class="ico-full-name">Litecoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/MIOTA-logo.png"><br /><span class="ico-short-name">MIOTA</span>', 
                Coin_Name: '<span class="ico-full-name">Miota</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/NEO-logo.png"><br /><span class="ico-short-name">NEO</span>', 
                Coin_Name: '<span class="ico-full-name">NEO</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            }
        ],

        searchQueryMainCalendarTable: '',
        gridColumnsHistoryTable: ['Fav_Coin', 'Symbol', 'Coin_Name', 'Fav_Event', 'Event', 'Location', 'Date'],
        gridDataHistoryTable: [
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/DASH-logo.png"><br /><span class="ico-short-name">DASH</span>', 
                Coin_Name: '<span class="ico-full-name">Darkcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Exchanges</span>', 
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/BTC-logo.png"><br /><span class="ico-short-name">BTC</span>', 
                Coin_Name: '<span class="ico-full-name">Bitcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/BTH-logo.png"><br /><span class="ico-short-name">BTH</span>', 
                Coin_Name: '<span class="ico-full-name">Bytether</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Conference</span>', 
                Location: '<span class="city-location">Bucharest</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/DASH-logo.png"><br /><span class="ico-short-name">DASH</span>', 
                Coin_Name: '<span class="ico-full-name">Darkcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Exchanges</span>', 
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/MIOTA-logo.png"><br /><span class="ico-short-name">MIOTA</span>', 
                Coin_Name: '<span class="ico-full-name">Miota</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Conference</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/NEO-logo.png"><br /><span class="ico-short-name">NEO</span>', 
                Coin_Name: '<span class="ico-full-name">NEO</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Exchanges</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETH-logo.png"><br /><span class="ico-short-name">ETH</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/BTH-logo.png"><br /><span class="ico-short-name">BTH</span>', 
                Coin_Name: '<span class="ico-full-name">Bytether</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/DASH-logo.png"><br /><span class="ico-short-name">DASH</span>', 
                Coin_Name: '<span class="ico-full-name">Darkcoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETC-logo.png"><br /><span class="ico-short-name">ETC</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum Classic</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Conference</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETH-logo.png"><br /><span class="ico-short-name">ETH</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/LTC-logo.png"><br /><span class="ico-short-name">LTC</span>', 
                Coin_Name: '<span class="ico-full-name">Litecoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/MIOTA-logo.png"><br /><span class="ico-short-name">MIOTA</span>', 
                Coin_Name: '<span class="ico-full-name">Miota</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/NEO-logo.png"><br /><span class="ico-short-name">NEO</span>', 
                Coin_Name: '<span class="ico-full-name">NEO</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/ETH-logo.png"><br /><span class="ico-short-name">ETH</span>', 
                Coin_Name: '<span class="ico-full-name">Ethereum</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/LTC-logo.png"><br /><span class="ico-short-name">LTC</span>', 
                Coin_Name: '<span class="ico-full-name">Litecoin</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/NEO-logo.png"><br /><span class="ico-short-name">NEO</span>', 
                Coin_Name: '<span class="ico-full-name">NEO</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            },
            { 
                Fav_Coin: '<i class="fa fa-star history-star" aria-hidden="true" title="Add Coin To Favorites" alt="Add Coin To Favorites"></i>', 
                Symbol: '<img class="ico-logo" src="img/MIOTA-logo.png"><br /><span class="ico-short-name">MIOTA</span>', 
                Coin_Name: '<span class="ico-full-name">Miota</span>', 
                Fav_Event: '<i class="fa fa-star upcomming-star" aria-hidden="true" title="Add Event To Favorites" alt="Add Event To Favorites"></i>', 
                Event: '<span class="event-category">Meetup</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2017</span>'
            }
        ],

        gridColumnsRoadMapsTable: ['Fav', 'Event_Title', 'Event', 'Date'],
        gridDataRoadMapsTable: [
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">The DAO</span>', 
                Event: '<span class="event-category">The DAO code completes the review and starts to operate</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">QR</span>', 
                Event: '<span class="event-category">The post-quantum cryptographic function is...</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash Core</span>', 
                Event: '<span class="event-category">Start 1:1 exchange for Hcash/Hshare.</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash/Hshare</span>', 
                Event: '<span class="event-category">Complete the Hcash beta version of the core code...</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash Only</span>', 
                Event: '<span class="event-category">Completely destroy Hshare hid</span>',  
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash+</span>', 
                Event: '<span class="event-category">Continue to access the block-based infrastructure...</span>',  
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">The DAO</span>', 
                Event: '<span class="event-category">The DAO code completes the review and starts to operate</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">QR</span>', 
                Event: '<span class="event-category">The post-quantum cryptographic function is...</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash Core</span>', 
                Event: '<span class="event-category">Start 1:1 exchange for Hcash/Hshare.</span>',  
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash/Hshare</span>', 
                Event: '<span class="event-category">Complete the Hcash beta version of the core code...</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash Only</span>', 
                Event: '<span class="event-category">Completely destroy Hshare hid</span>',  
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event_Title: '<span class="event-category">Hcash+</span>', 
                Event: '<span class="event-category">Continue to access the block-based infrastructure...</span>',  
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            }
        ],

        gridColumnsEventsTable: ['Fav', 'Event', 'Location', 'Date'],
        gridDataEventsTable: [
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>', 
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">QR</span>', 
                Location: '<span class="city-location">Siberia</span><br /><span class="country-location">URSS</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">QR</span>', 
                Location: '<span class="city-location">Siberia</span><br /><span class="country-location">URSS</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">QR</span>', 
                Location: '<span class="city-location">Siberia</span><br /><span class="country-location">URSS</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">QR</span>', 
                Location: '<span class="city-location">Siberia</span><br /><span class="country-location">URSS</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">QR</span>', 
                Location: '<span class="city-location">Siberia</span><br /><span class="country-location">URSS</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">QR</span>', 
                Location: '<span class="city-location">Siberia</span><br /><span class="country-location">URSS</span>', 
                Date: '<span class="date">Oct</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Core</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Feb</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash/Hshare</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">02.12</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash Only</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">Hcash+</span>', 
                Location: '<span class="city-location">Tel Aviv</span><br /><span class="country-location">Israel</span>', 
                Date: '<span class="date">Jan</span><br /><span class="date-year">2019</span>'
            },
            { 
                Fav: '<i class="fa fa-star roadmaps-star" aria-hidden="true" title="Add To Favorites" alt="Add To Favorites"></i>', 
                Event: '<span class="event-category">The DAO</span>',  
                Location: '<span class="city-location">Vaslui</span><br /><span class="country-location">Romania</span>', 
                Date: '<span class="date">Q3</span><br /><span class="date-year">2018</span>'
            }
            
        ]
    }
});
