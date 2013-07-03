var _nationalities = [
	[
		"כלל האוכלוסיה"
	],
	[
		"יהודים",
		"כלל האוכלוסיה"
	],
	[
		"יהודים",
		"ערבים",
		"כלל האוכלוסיה"
	]
];

var _title = "השפעת אירועים על דעת הקהל בנוגע לשלום";

var _subtitle = "כיצד השפיעו אירועים מדיניים ובטחוניים על דעת הקהל הציבורית בעניין המגעים לשלום בין ישראל לפלסטינאים בין השנים 1994-2012.";

var _questions = [
	"באופן כללי האם אתה מגדיר את עצמך כמי שתומך או מתנגד לתהליך השלום בין ישראל לערבים?",
	"האם אתה מאמין או לא מאמין שמשא ומתן בין ישראל לרשות הפלשטינית יוביל בשנים הקרובות לשלום בין ישראל לפלשטינים?"
];

var _opinions = [
	[
		"לא יודע אין עמדה",
		"מתנגד מאוד",
		"די מתנגד",
		"ככה באמצע",
		"די תומך",
		"תומך מאוד"
	],
	[
		"לא יודע אין עמדה",
		"לגמרי לא מאמין",
		"די לא מאמין",
		"די מאמין",
		"מאמין מאוד"
	]
];

var _colors = [
	"#E6E6E6", // Avoided - grey
	"#F05A23", // Negative - orange
	"#BB7A4A",
	"#809F77",
	"#4DBE9D",
	"#09E8CD"  // Positive - green
];

var _events = [
	"חטיפת נחשון וקסמן", 			//0
	"הסכם השלום עם ירדן",			//1
	"הסכם אוסלו ב",					//2
	"רצח רבין",						//3
	"הפיגוע בדיזינגוף סנטר",		//4
	"היציאה מלבנון",				//5
	"שיחות קמפ דיוד",				//6
	"אינטיפדת אל אקצה",				//7
	"הלינץ ברמלה",					//8
	"הפיגוע במסעדת סבארו",			//9
	"הפיגוע במלון פארק",			//10
	"חומת מגן",						//11
	"פיגוע במסעדת מקסים",			//12
	"חיסול אחמד יסין",				//13
	"ההתנתקות",						//14
	"חיסול יחיא עייש",				//15
	"חטיפת גלעד שליט",				//16
	"מלחמת לבנון השניה",			//17
	"הפיגוע בישיבת מרכז הרב",		//18
	"החזרת סמיר קונטאר",			//19
	"החזרת גופות חיילים החטופים",	//20
	"מבצע עופרת יצוקה",				//21
	"הטבח באיתמר",					//22
	"חיסול אחמד געברי"				//23
];
var _eventText = [
	"חטיפת נחשון וקסמן", 			//0
	"הסכם השלום עם ירדן",			//1
	"הסכם אוסלו ב",					//2
	"רצח רבין",						//3
	"הפיגוע בדיזינגוף סנטר",		//4
	"היציאה מלבנון",				//5
	"שיחות קמפ דיוד",				//6
	"אינטיפדת אל אקצה",				//7
	"הלינץ ברמלה",					//8
	"הפיגוע במסעדת סבארו",			//9
	"הפיגוע במלון פארק",			//10
	"מבצע חומת מגן היה מבצע רחב היקף של צהל ושירות"+'\n'+
	"הביטחון הכללי בשטחי יהודה ושומרון שהתרחש בין ה-29"+'\n'+
	"במרץ ל-10 במאי 2002. מטרתו העיקרית של המבצע"+'\n'+
	"הייתה לפגוע בתשתיות הטרור הפלסטיני ולעצור את גל"+'\n'+
	"הפיגועים שהתעצם",				//11
	"פיגוע במסעדת מקסים",			//12
	"חיסול אחמד יסין",				//13
	"ההתנתקות",						//14
	"חיסול יחיא עייש",				//15
	"חטיפת גלעד שליט",				//16
	"מלחמת לבנון השניה",			//17
	"הפיגוע בישיבת מרכז הרב",		//18
	"החזרת סמיר קונטאר",			//19
	"החזרת גופות חיילים החטופים",	//20
	"מבצע עופרת יצוקה",				//21
	"הטבח באיתמר",					//22
	"חיסול אחמד געברי"				//23
];
var _authors = "יובל טרגל, רוני שמי, רן חבשוש, רעות עמסלם";

var _referenceText = "הנתונים הינם לקוחים מתוך אתר ";

var _referenceLink = "מדד השלום";