
import {
    Avatar,
    Input,
    Space,
    Table,
} from '@mantine/core';
import { Selector, ChevronDown, ChevronUp, Search } from 'tabler-icons-react';

const customers = [{
    "name": "Dannie Lorenzin",
    "email": "dlorenzin0@reddit.com",
    "firstContact": "1/6/2021",
    "phone": "(844) 3145319",
    "address": "905 Corben Avenue"
}, {
    "name": "Becca Klasing",
    "email": "bklasing1@mashable.com",
    "firstContact": "1/21/2022",
    "phone": "(314) 9541866",
    "address": "5 Becker Junction"
}, {
    "name": "Bendite Nutkin",
    "email": "bnutkin2@cpanel.net",
    "firstContact": "5/10/2020",
    "phone": "(486) 6965558",
    "address": "64855 Carberry Avenue"
}, {
    "name": "Ransell Fogden",
    "email": "rfogden3@cpanel.net",
    "firstContact": "12/4/2020",
    "phone": "(303) 8480868",
    "address": "3484 Meadow Ridge Center"
}, {
    "name": "Cozmo Twallin",
    "email": "ctwallin4@fema.gov",
    "firstContact": "3/1/2020",
    "phone": "(634) 8119268",
    "address": "74865 Shoshone Avenue"
}, {
    "name": "Allix Sprigg",
    "email": "asprigg5@ihg.com",
    "firstContact": "10/16/2020",
    "phone": "(579) 4554651",
    "address": "5 Buell Park"
}, {
    "name": "Alina Kindleside",
    "email": "akindleside6@pen.io",
    "firstContact": "5/19/2022",
    "phone": "(591) 5814236",
    "address": "7992 Nelson Plaza"
}, {
    "name": "Pietrek Halshaw",
    "email": "phalshaw7@mayoclinic.com",
    "firstContact": "3/19/2020",
    "phone": "(121) 4305391",
    "address": "6 Basil Park"
}, {
    "name": "Ezekiel Pople",
    "email": "epople8@hibu.com",
    "firstContact": "9/4/2020",
    "phone": "(643) 2528208",
    "address": "348 Oriole Way"
}, {
    "name": "Brenn Barkshire",
    "email": "bbarkshire9@miibeian.gov.cn",
    "firstContact": "6/1/2022",
    "phone": "(959) 4216988",
    "address": "9 Cambridge Trail"
}, {
    "name": "Melinda Askem",
    "email": "maskema@answers.com",
    "firstContact": "5/8/2022",
    "phone": "(295) 7761861",
    "address": "34 Schmedeman Street"
}, {
    "name": "Oswell Fransewich",
    "email": "ofransewichb@samsung.com",
    "firstContact": "1/29/2022",
    "phone": "(618) 5997806",
    "address": "96785 Del Sol Terrace"
}, {
    "name": "Brannon Elsmore",
    "email": "belsmorec@ftc.gov",
    "firstContact": "5/22/2020",
    "phone": "(561) 8839152",
    "address": "01 Grim Lane"
}, {
    "name": "Maddi Vedeniktov",
    "email": "mvedeniktovd@blogspot.com",
    "firstContact": "5/12/2022",
    "phone": "(900) 6299071",
    "address": "0226 Schmedeman Junction"
}, {
    "name": "Torr Corbie",
    "email": "tcorbiee@delicious.com",
    "firstContact": "1/20/2022",
    "phone": "(330) 8582681",
    "address": "5 Katie Street"
}, {
    "name": "Elijah McGeever",
    "email": "emcgeeverf@canalblog.com",
    "firstContact": "11/18/2020",
    "phone": "(718) 6678575",
    "address": "039 Aberg Terrace"
}, {
    "name": "Midge Yewdell",
    "email": "myewdellg@apache.org",
    "firstContact": "1/30/2022",
    "phone": "(609) 1058070",
    "address": "8517 Buhler Plaza"
}, {
    "name": "Robinson Peschke",
    "email": "rpeschkeh@wufoo.com",
    "firstContact": "3/26/2020",
    "phone": "(231) 7279505",
    "address": "7 Golf View Pass"
}, {
    "name": "Amerigo Mabone",
    "email": "amabonei@bbb.org",
    "firstContact": "3/30/2021",
    "phone": "(377) 2513107",
    "address": "7932 5th Pass"
}, {
    "name": "Hubert Esel",
    "email": "heselj@twitpic.com",
    "firstContact": "10/6/2021",
    "phone": "(316) 9734778",
    "address": "275 Oak Valley Hill"
}, {
    "name": "Lorrayne Twining",
    "email": "ltwiningk@bloomberg.com",
    "firstContact": "9/23/2021",
    "phone": "(108) 4629738",
    "address": "3066 Sunfield Avenue"
}, {
    "name": "Tamarra Blofield",
    "email": "tblofieldl@purevolume.com",
    "firstContact": "8/4/2020",
    "phone": "(750) 7915030",
    "address": "83 Esch Trail"
}, {
    "name": "Neda Lonnon",
    "email": "nlonnonm@zimbio.com",
    "firstContact": "2/13/2021",
    "phone": "(694) 7614964",
    "address": "21 Tony Terrace"
}, {
    "name": "Cole Talby",
    "email": "ctalbyn@youtube.com",
    "firstContact": "1/18/2022",
    "phone": "(638) 7733542",
    "address": "40 Bluestem Pass"
}, {
    "name": "Yardley Sapsford",
    "email": "ysapsfordo@arizona.edu",
    "firstContact": "10/4/2021",
    "phone": "(978) 6579893",
    "address": "9444 Shasta Road"
}, {
    "name": "Binnie Boreland",
    "email": "bborelandp@spotify.com",
    "firstContact": "6/28/2021",
    "phone": "(391) 2069575",
    "address": "683 Susan Pass"
}, {
    "name": "Nichols Reams",
    "email": "nreamsq@blogger.com",
    "firstContact": "2/14/2020",
    "phone": "(282) 7116802",
    "address": "6448 Sauthoff Circle"
}, {
    "name": "Aurel Dogg",
    "email": "adoggr@wisc.edu",
    "firstContact": "6/22/2020",
    "phone": "(546) 2628395",
    "address": "0160 Sugar Crossing"
}, {
    "name": "Adella Halley",
    "email": "ahalleys@blog.com",
    "firstContact": "6/12/2020",
    "phone": "(916) 9756590",
    "address": "8 Melrose Parkway"
}, {
    "name": "Keriann Capron",
    "email": "kcapront@hao123.com",
    "firstContact": "1/14/2021",
    "phone": "(946) 2410935",
    "address": "95 Eastlawn Road"
}, {
    "name": "Blondie Vigurs",
    "email": "bvigursu@sohu.com",
    "firstContact": "8/30/2021",
    "phone": "(648) 3926689",
    "address": "7099 Reindahl Drive"
}, {
    "name": "Renell Henfre",
    "email": "rhenfrev@pcworld.com",
    "firstContact": "12/28/2020",
    "phone": "(833) 4855863",
    "address": "71 Westport Point"
}, {
    "name": "Carrie Wallworke",
    "email": "cwallworkew@reuters.com",
    "firstContact": "9/11/2021",
    "phone": "(665) 5610002",
    "address": "3629 Porter Avenue"
}, {
    "name": "Crissie Wayt",
    "email": "cwaytx@ucoz.ru",
    "firstContact": "1/6/2022",
    "phone": "(901) 3102541",
    "address": "71 Golf View Way"
}, {
    "name": "Jaquenetta Hillan",
    "email": "jhillany@sun.com",
    "firstContact": "2/22/2020",
    "phone": "(680) 3793741",
    "address": "9856 Union Crossing"
}, {
    "name": "Alysa Clemon",
    "email": "aclemonz@exblog.jp",
    "firstContact": "1/7/2022",
    "phone": "(264) 2442920",
    "address": "8 Logan Street"
}, {
    "name": "Sally Dales",
    "email": "sdales10@ow.ly",
    "firstContact": "11/1/2021",
    "phone": "(342) 1090891",
    "address": "411 Summit Avenue"
}, {
    "name": "Harbert Eschalotte",
    "email": "heschalotte11@howstuffworks.com",
    "firstContact": "2/19/2022",
    "phone": "(820) 8131838",
    "address": "572 Old Shore Terrace"
}, {
    "name": "Frederico Raw",
    "email": "fraw12@economist.com",
    "firstContact": "9/14/2021",
    "phone": "(741) 7299848",
    "address": "1504 Grover Pass"
}, {
    "name": "Casie Goldsmith",
    "email": "cgoldsmith13@wordpress.com",
    "firstContact": "1/5/2022",
    "phone": "(937) 8890572",
    "address": "5763 Mariners Cove Road"
}, {
    "name": "Frank Pitkeathley",
    "email": "fpitkeathley14@google.fr",
    "firstContact": "3/19/2022",
    "phone": "(143) 2312868",
    "address": "6038 Birchwood Road"
}, {
    "name": "Noak Beverley",
    "email": "nbeverley15@e-recht24.de",
    "firstContact": "4/4/2020",
    "phone": "(374) 1446197",
    "address": "0 Hovde Terrace"
}, {
    "name": "Sherry Nemchinov",
    "email": "snemchinov16@skyrock.com",
    "firstContact": "4/26/2021",
    "phone": "(684) 6432989",
    "address": "01 Mayer Plaza"
}, {
    "name": "Elfrida Hadeke",
    "email": "ehadeke17@sourceforge.net",
    "firstContact": "12/11/2019",
    "phone": "(161) 8947778",
    "address": "05060 Anderson Place"
}, {
    "name": "Bambi Connop",
    "email": "bconnop18@nyu.edu",
    "firstContact": "3/10/2021",
    "phone": "(602) 4931006",
    "address": "8 Buell Parkway"
}, {
    "name": "Viva McKinnon",
    "email": "vmckinnon19@theglobeandmail.com",
    "firstContact": "6/21/2020",
    "phone": "(629) 8281362",
    "address": "11396 Straubel Circle"
}, {
    "name": "Louisette Dennick",
    "email": "ldennick1a@merriam-webster.com",
    "firstContact": "11/28/2020",
    "phone": "(366) 4452442",
    "address": "32 Reinke Place"
}, {
    "name": "Denny Biddleston",
    "email": "dbiddleston1b@gmpg.org",
    "firstContact": "8/17/2020",
    "phone": "(659) 1175937",
    "address": "501 Cascade Court"
}, {
    "name": "Brady Baber",
    "email": "bbaber1c@geocities.com",
    "firstContact": "11/18/2020",
    "phone": "(360) 7882793",
    "address": "61694 Corry Alley"
}, {
    "name": "Vasili Aldritt",
    "email": "valdritt1d@slideshare.net",
    "firstContact": "8/2/2021",
    "phone": "(766) 1181144",
    "address": "63996 Sullivan Avenue"
}, {
    "name": "Tish Nissle",
    "email": "tnissle1e@360.cn",
    "firstContact": "5/14/2021",
    "phone": "(714) 2583637",
    "address": "963 Dunning Avenue"
}, {
    "name": "Kathe Grubbe",
    "email": "kgrubbe1f@epa.gov",
    "firstContact": "8/23/2021",
    "phone": "(641) 7316954",
    "address": "3523 Grayhawk Way"
}, {
    "name": "Natalina Moysey",
    "email": "nmoysey1g@gizmodo.com",
    "firstContact": "4/11/2020",
    "phone": "(770) 9875622",
    "address": "87603 Warbler Lane"
}, {
    "name": "Portie Whyke",
    "email": "pwhyke1h@wikimedia.org",
    "firstContact": "2/24/2020",
    "phone": "(224) 9665640",
    "address": "98574 7th Road"
}, {
    "name": "Vevay Shemelt",
    "email": "vshemelt1i@goo.ne.jp",
    "firstContact": "6/1/2020",
    "phone": "(168) 8438453",
    "address": "3 Springs Drive"
}, {
    "name": "Hernando Rableau",
    "email": "hrableau1j@whitehouse.gov",
    "firstContact": "12/8/2020",
    "phone": "(704) 2014764",
    "address": "754 Karstens Center"
}, {
    "name": "Allsun Gush",
    "email": "agush1k@columbia.edu",
    "firstContact": "5/26/2022",
    "phone": "(486) 4537063",
    "address": "12868 Lawn Terrace"
}, {
    "name": "Verene Grigoryov",
    "email": "vgrigoryov1l@ask.com",
    "firstContact": "2/26/2022",
    "phone": "(315) 7190305",
    "address": "3301 6th Circle"
}, {
    "name": "Leela Labrone",
    "email": "llabrone1m@cloudflare.com",
    "firstContact": "4/5/2021",
    "phone": "(611) 1174506",
    "address": "590 Grover Court"
}, {
    "name": "Roselia Winterson",
    "email": "rwinterson1n@quantcast.com",
    "firstContact": "4/25/2021",
    "phone": "(731) 3015793",
    "address": "1 Hudson Trail"
}, {
    "name": "Robinet Conquer",
    "email": "rconquer1o@bing.com",
    "firstContact": "11/2/2021",
    "phone": "(969) 6697377",
    "address": "18 Morrow Crossing"
}, {
    "name": "Deborah Burgin",
    "email": "dburgin1p@technorati.com",
    "firstContact": "4/19/2022",
    "phone": "(414) 7433785",
    "address": "2556 Sachtjen Crossing"
}, {
    "name": "Valentine Hercock",
    "email": "vhercock1q@ox.ac.uk",
    "firstContact": "8/23/2021",
    "phone": "(849) 7954489",
    "address": "8 Kings Park"
}, {
    "name": "Jedidiah Robertis",
    "email": "jrobertis1r@hud.gov",
    "firstContact": "3/27/2022",
    "phone": "(500) 4217018",
    "address": "31 Crownhardt Crossing"
}, {
    "name": "Davidson Wharrier",
    "email": "dwharrier1s@narod.ru",
    "firstContact": "9/3/2021",
    "phone": "(706) 7648116",
    "address": "751 Bartillon Junction"
}, {
    "name": "Sharron State",
    "email": "sstate1t@wp.com",
    "firstContact": "12/25/2020",
    "phone": "(920) 8596973",
    "address": "019 Swallow Alley"
}, {
    "name": "Bernarr Tibb",
    "email": "btibb1u@whitehouse.gov",
    "firstContact": "11/12/2020",
    "phone": "(111) 8197909",
    "address": "3322 Pawling Road"
}, {
    "name": "Jack Standbrooke",
    "email": "jstandbrooke1v@acquirethisname.com",
    "firstContact": "8/12/2020",
    "phone": "(352) 8706492",
    "address": "76 Lindbergh Parkway"
}, {
    "name": "Gnni Michelet",
    "email": "gmichelet1w@wikipedia.org",
    "firstContact": "9/28/2021",
    "phone": "(219) 3522391",
    "address": "55357 Sutherland Hill"
}, {
    "name": "Giles Hobble",
    "email": "ghobble1x@examiner.com",
    "firstContact": "12/25/2019",
    "phone": "(696) 5718733",
    "address": "562 Manitowish Plaza"
}, {
    "name": "Bettye Stoneham",
    "email": "bstoneham1y@ehow.com",
    "firstContact": "5/26/2021",
    "phone": "(448) 8321377",
    "address": "3 Hudson Way"
}, {
    "name": "Eartha Dike",
    "email": "edike1z@bandcamp.com",
    "firstContact": "12/4/2019",
    "phone": "(844) 9156738",
    "address": "861 Porter Alley"
}, {
    "name": "Niven Purvess",
    "email": "npurvess20@chicagotribune.com",
    "firstContact": "9/26/2020",
    "phone": "(338) 3294413",
    "address": "14977 Charing Cross Trail"
}, {
    "name": "Gabriellia Howroyd",
    "email": "ghowroyd21@google.pl",
    "firstContact": "6/23/2021",
    "phone": "(223) 7898567",
    "address": "892 Sycamore Terrace"
}, {
    "name": "Dagny Dunsmore",
    "email": "ddunsmore22@feedburner.com",
    "firstContact": "10/4/2021",
    "phone": "(602) 5028746",
    "address": "4903 Springview Terrace"
}, {
    "name": "Norean Barensen",
    "email": "nbarensen23@whitehouse.gov",
    "firstContact": "8/29/2020",
    "phone": "(388) 6565881",
    "address": "03453 Gerald Park"
}, {
    "name": "Tod Selkirk",
    "email": "tselkirk24@msn.com",
    "firstContact": "6/10/2022",
    "phone": "(244) 2330759",
    "address": "4039 Summit Park"
}, {
    "name": "Kessiah Francecione",
    "email": "kfrancecione25@diigo.com",
    "firstContact": "1/14/2022",
    "phone": "(930) 3887029",
    "address": "759 Blue Bill Park Trail"
}, {
    "name": "Wiatt Cruces",
    "email": "wcruces26@wikipedia.org",
    "firstContact": "2/28/2021",
    "phone": "(852) 6238366",
    "address": "922 7th Plaza"
}, {
    "name": "Annadiane McRamsey",
    "email": "amcramsey27@state.tx.us",
    "firstContact": "3/18/2021",
    "phone": "(842) 5705604",
    "address": "65 Clemons Hill"
}, {
    "name": "Latrina Van Vuuren",
    "email": "lvan28@icq.com",
    "firstContact": "12/24/2019",
    "phone": "(383) 5567047",
    "address": "8030 Thierer Trail"
}, {
    "name": "Chip Gilstoun",
    "email": "cgilstoun29@google.com.au",
    "firstContact": "8/7/2021",
    "phone": "(255) 5286732",
    "address": "91 Sachs Parkway"
}, {
    "name": "Gerardo Kemble",
    "email": "gkemble2a@phpbb.com",
    "firstContact": "12/8/2019",
    "phone": "(278) 6147420",
    "address": "441 Judy Way"
}, {
    "name": "Godart Jeaffreson",
    "email": "gjeaffreson2b@jalbum.net",
    "firstContact": "5/3/2020",
    "phone": "(332) 5838348",
    "address": "33 Lyons Street"
}, {
    "name": "Osmund Slany",
    "email": "oslany2c@jalbum.net",
    "firstContact": "6/23/2020",
    "phone": "(400) 9364277",
    "address": "30 Maryland Junction"
}, {
    "name": "Joyann Yanyushkin",
    "email": "jyanyushkin2d@aboutads.info",
    "firstContact": "1/6/2020",
    "phone": "(603) 9877646",
    "address": "6 Hoepker Way"
}, {
    "name": "Monah Hacquel",
    "email": "mhacquel2e@slate.com",
    "firstContact": "5/23/2021",
    "phone": "(256) 8837439",
    "address": "5 Veith Street"
}, {
    "name": "Marlee Fleet",
    "email": "mfleet2f@twitpic.com",
    "firstContact": "3/17/2021",
    "phone": "(787) 3397473",
    "address": "74201 Thackeray Hill"
}, {
    "name": "Jaclyn Sebire",
    "email": "jsebire2g@guardian.co.uk",
    "firstContact": "3/14/2021",
    "phone": "(530) 5349070",
    "address": "75318 Beilfuss Trail"
}, {
    "name": "Farly Bonafant",
    "email": "fbonafant2h@yale.edu",
    "firstContact": "2/19/2021",
    "phone": "(256) 2493779",
    "address": "8 Sloan Drive"
}, {
    "name": "Harwell Dorrins",
    "email": "hdorrins2i@ustream.tv",
    "firstContact": "5/28/2020",
    "phone": "(533) 6159238",
    "address": "748 Texas Court"
}, {
    "name": "Charlie Kiln",
    "email": "ckiln2j@intel.com",
    "firstContact": "10/30/2020",
    "phone": "(160) 6288321",
    "address": "1148 Pleasure Crossing"
}, {
    "name": "Jennie Beardow",
    "email": "jbeardow2k@biblegateway.com",
    "firstContact": "1/19/2022",
    "phone": "(359) 7766803",
    "address": "4 Fair Oaks Court"
}, {
    "name": "Roberta Calderhead",
    "email": "rcalderhead2l@lycos.com",
    "firstContact": "3/21/2020",
    "phone": "(846) 9346017",
    "address": "303 Elmside Alley"
}, {
    "name": "Joseph Wigzell",
    "email": "jwigzell2m@sbwire.com",
    "firstContact": "8/31/2020",
    "phone": "(226) 8776118",
    "address": "5501 Badeau Trail"
}, {
    "name": "Elyse Chubb",
    "email": "echubb2n@gmpg.org",
    "firstContact": "5/31/2021",
    "phone": "(874) 9744395",
    "address": "76 Northport Pass"
}, {
    "name": "Courtney Rosenau",
    "email": "crosenau2o@paginegialle.it",
    "firstContact": "3/8/2020",
    "phone": "(811) 5021907",
    "address": "281 Mayfield Alley"
}, {
    "name": "Melvin Hubbock",
    "email": "mhubbock2p@cafepress.com",
    "firstContact": "12/28/2020",
    "phone": "(479) 1419786",
    "address": "62 Graceland Lane"
}, {
    "name": "Mira Netti",
    "email": "mnetti2q@lycos.com",
    "firstContact": "9/14/2021",
    "phone": "(182) 9370136",
    "address": "253 Steensland Terrace"
}, {
    "name": "Prudence Chansonne",
    "email": "pchansonne2r@networkadvertising.org",
    "firstContact": "1/16/2021",
    "phone": "(728) 3339412",
    "address": "0 Gerald Plaza"
}]

//TODO-MMUEJDE: Pagination
//TODO-MMUEJDE: Search
//TODO-MMUEJDE: Welche Einschränkungen hat er?
//TODO-MMUEJDE: Welche Termine hatte der Kunde schon?


export function CustomerView() {
    const rows = customers.map((customer) => (
        <tr key={customer.name}>
            <td><Avatar></Avatar></td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>
            <td>{customer.firstContact}</td>
        </tr>
    ));

    return (
        <>
            <Input
                icon={<Search />}
                variant="filled"
                placeholder="Suchen"
            />
            <Space h="lg" />
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Telefon</th>
                        <th>Adresse</th>
                        <th>Erstkontakt am</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </>

    );
}

export default CustomerView;
