var Transaction = 'Caroline Abram';
var Catalog = 'OPTA_FILAO'
const logo = ''
const LeftMenu = [
	{
    	catalog: "OPTA_FILAO",
    	transaction: "Caroline Abram",
    	title: "CAROLINE ABRAM",
    	action:"createNewTransaction",
    	deepLink: 'transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%2256d94f99-bad8-4322-98e9-7f1b31104fb5%5C%22%7D%22&StartIndex=0&SearchAll=false'
  },
 {
	catalog: "BLUSH FR",
        transaction: "BLUSH FR",
    	title: "BLUSH",
    	action:"createNewTransaction",
    	deepLink: '/transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22f61c05e9-41d8-4535-9eee-cc9d732a431e%5C%22%7D%22'
  },
	{
	catalog: "Tete a Lunettes",
        transaction: "Tete \u00e0 Lunettes",
    	title: "T\u00caTE \u00c0 LUNETTES",
    	action:"createNewTransaction",
    	deepLink: '/Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22470ac326-d207-4756-a0d9-02e06e036935%5C%22%7D%22'
  },
		{
	catalog: "ACCESSOIRES",
        transaction: "Accessoires",
    	title: "ACCESSOIRES",
    	action:"createNewTransaction",
    	deepLink: '/Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22ff87da18-e501-47ec-bc91-58794d177dcb%5C%22%7D%22'
  },
		{
	catalog: "TALLA",
        transaction: "Commande Talla",
    	title: "TALLA",
    	action:"createNewTransaction",
    	deepLink: '/Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab="{\"JsonFilter\":\"dee8868a-ecd2-4a5f-8c29-af7ee70bf20a\"}"'
  },
  {
    title: "COMMANDES",
    action:"navigation",
    deepLink: 'list/all_activities'
  },
	/*{
    activity:"SAV",
    title: "SAV",
    action:"createNewActivity",
    deepLink: 'activities/details/{{UUID}}'
  },*/
{
    activity:"SAV New",
    title: "SAV",
    action:"createNewActivity",
    deepLink: 'activities/details/{{UUID}}'
  },
	
 
];
const RightMenu = [
	
  /*{
        catalog: "Default Catalog",
        transaction: "Commande",
    title: "",
    icon:`          
	<svg class="end-icon" xmlns="http://www.w3.org/2000/svg" style="width:24px !important;height:24px !important" viewBox="0 0 24 24">
        	<path fill-rule="evenodd" d="M12.0000323,6.53227886 C11.3950379,5.80461298 10.3525058,5 8.70065923,5 C5.88880809,5 4,7.6077764 4,10.0428863 C4,13.5886357 10.8032276,18.3400072 11.5787506,18.8698594 C11.7056263,18.9562023 11.8531197,19 12,19 C12.1475017,19 12.2943695,18.9568286 12.42125,18.8698594 C13.196885,18.3399111 20,13.5884756 20,10.0428863 C20,7.6077764 18.1105525,5 15.2987014,5 C13.6475588,5 12.6049947,5.80461298 12.0000323,6.53227886 Z M6,10.2704482 C6,8.89952171 7.0278555,7 8.95673632,7 C10.7115926,7 11.3312748,8.51698222 11.3554777,8.57695251 C11.4563609,8.84352483 11.7111714,9.01777838 11.9959389,9.02008266 C12.2836064,9.02008266 12.5384007,8.84467697 12.6427535,8.58156106 C12.6681193,8.51693791 13.287834,7 15.042674,7 C16.9721171,7 18,8.89943309 18,10.2704778 C18,12.0902656 14.4708072,14.9895916 11.9994572,16.75 C9.5286031,14.9907733 6,12.0925994 6,10.2704482 Z" />
	</svg> 
    `,
    action:"setUUIDandNav",
    deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%227142a6f9-af48-4dba-a30d-85d89b2ed083%5C%22%7D%22'
  }*/

	
	
]
/*actions:

setUUIDandNav
createNewTransaction
navigation
createNewActivity
openInNewTab
zendesk
*/
