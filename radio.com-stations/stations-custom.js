/*
 * Please rename this file to "stations-custom.js" if you actually want to use it :-)
 * This file contains all your custom stations.
 *
 * How it works:
 * The stations_custom object contains several country arrays.
 * Each array contains the stations for that country.
 * Each station is an object containing a name, logo and url property.
 * It follows the basic JavaScript object notation.
 *
 * You may want to peek at the stations-america.js and stations-europe.js files as to how it works.
 * Please make sure that you use the country name that is used in-game as well,
 * and please make sure the URL is the actual radio stream.
 * You can test that by opening the URL in VLC media player, if it plays, it is probably the right URL.
 *
 * Additionally, you can also put stations under the "global" country. These stations will be available everywhere.
 * You can see simulatorONE, TruckersFM and Dagnys Jukebox added here as an example.
 */

var stations_custom = {
    "las_vegas": [
        {
            name: "Mix 94.1",
            logo: "stations/images-america/00_radio.com/Mix 94.1.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KMXBFM_SC"
        },
        {
            name: "ChannelQ 94.1-HD2",
            logo: "stations/images-america/00_radio.com/ChannelQ.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KAMPHD2_SC"
        },
        {
            name: "98.5 KLUC",
            logo: "stations/images-america/00_radio.com/98.5 KLUC.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KLUCFM_SC"
        },
        {
            name: "98.5-HD2 Da Shaka",
            logo: "stations/images-america/00_radio.com/98.5-HD2 Da Shaka.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KLUCHD2_SC"
        },
        {
            name: "Q100.5",
            logo: "stations/images-america/00_radio.com/Q100.5.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KXQQFM_SC"
        },
        {
            name: "X107.5",
            logo: "stations/images-america/00_radio.com/X107.5.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KXTEFM_SC"
        },
    ],
    "los_angeles": [
        {
            name: "97.1 AMP Radio",
            logo: "stations/images-america/00_radio.com/97.1 AMP Radio.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KAMPFM_SC"
        },
        {
            name: "ChannelQ 97.1-HD2",
            logo: "stations/images-america/00_radio.com/ChannelQ.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KAMPHD2_SC"
        },
    ],
    "phoenix": [
        {
            name: "LIVE 101.5",
            logo: "stations/images-america/00_radio.com/LIVE 101.5.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KALVFM_SC"
        },
        {
            name: "ChannelQ 101.5-HD2",
            logo: "stations/images-america/00_radio.com/ChannelQ.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KAMPHD2_SC"
        },
    ],
    "portland": [
        {
            name: "97.1 Charlie FM",
            logo: "stations/images-america/00_radio.com/97.1 Charlie FM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KYCHFM_SC"
        },
        {
            name: "105.1 The Buzz",
            logo: "stations/images-america/00_radio.com/105.1 The Buzz.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KRSKFM_SC"
        },
        {
            name: "ChannelQ 105.1-HD2",
            logo: "stations/images-america/00_radio.com/ChannelQ.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KAMPHD2_SC"
        },
    ],
    "sacramento": [
        {
            name: "ALT 94.7",
            logo: "stations/images-america/00_radio.com/ALT 94.7.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KKDOFM_SC"
        },
        {
            name: "102.5 KSFM",
            logo: "stations/images-america/00_radio.com/102.5 KSFM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KSFMFM_SC"
        },
        {
            name: "106.5 The End",
            logo: "stations/images-america/00_radio.com/106.5 The End.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KUDLFM_SC"
        },
    ],
    "salt_lake": [
        {
            name: "FM 100.3",
            logo: "stations/images-america/00_radio.com/FM 100.3.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KSFIFM_SC"
        },
    ],
    "san_francisco": [
        {
            name: "Alice@97.3",
            logo: "stations/images-america/00_radio.com/Alice@97.3.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KLLCFM_SC"
        },
        {
            name: "ChannelQ 97.3-HD2",
            logo: "stations/images-america/00_radio.com/ChannelQ.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KAMPHD2_SC"
        },
        {
            name: "99.7 NOW",
            logo: "stations/images-america/00_radio.com/99.7 NOW.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KMVQFM_SC"
        },
    ],
    "seattle": [
        {
            name: "94.1 The Sound",
            logo: "stations/images-america/00_radio.com/94.1 The Sound.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KSWDFM_SC"
        },
        {
            name: "Hot 103.7",
            logo: "stations/images-america/00_radio.com/Hot 103.7.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KHTPFM_SC"
        },
        {
            name: "The Mountain 103.7-HD2",
            logo: "stations/images-america/00_radio.com/The Mountain 103.7-HD2.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KHTPHD2_SC"
        },
        {
            name: "ChannelQ 107.7-HD2",
            logo: "stations/images-america/00_radio.com/ChannelQ.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KAMPHD2_SC"
        },
    ],
};