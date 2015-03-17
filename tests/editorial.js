// editorial tests
(function( $ ) {
	'use strict';


	module( 'Editorial' );


	// text in the web page
	var body = getBodyText(),
		title = getTitleText(),
		description = $( 'meta[name=description]' ).attr( 'content' ),
		contentContainer = $( '#content-container, body' ).eq( 0 ),

		// list of non preferred terms
		NPT = {
			// format: NPT : preferred term
			'24 hour'		:	'24-hour',
			'24 hrs'		:	'24 hours',
			'24hr'		:	'24-hour',
			'4 wheel driving'	: '4-wheel-driving',
			'<'	: 'less than',
			'>'	: 'more than',
			'acknowledgment': 'acknowledgement',
			'advisor'		: 'adviser',
			'alleviate': 'ease',
			'amongst'		: 'among',
			'analyze'		: 'analyse',
			'and/or': 'generally, just or',
			'annual basis' : 'yearly',
			'annum'			: 'year',
			'anybody': 'anyone',
			'appendices'	: 'appendixes',
			'approach' : 'way',
			'assist'		: 'help',
			'assistance'		:	'help',
			'attain'		: 'to reach or gain',
			'belly button'		: 'bellybutton',
			'belly-button'		: 'bellybutton',
			'benefitted'	: 'benefited',
			'blue print'	: 'blueprint',
			'breast feed'		: 'breastfeed',
			'breast feeding': 'breastfeeding',
			'breast-feed'		: 'breastfeed',
			'breast-feeding': 'breastfeeding',
			'breastscreen check': 'breast screen',
			'breastscreen'		: 'breast screen',
			'broad spectrum'	: 'broad-spectrum',
			'broadspectrum'		: 'broad-spectrum',
			'brush-turkey'		: 'brush turkey',
			'brushturkey'		: 'brush turkey',
			'bulk bill'		: 'bulk-bill',
			'bush fire'		: 'bushfire',
			'bush-fire'		: 'bushfire',
			'business woman': 'businesswoman',
			'by product'	: 'by-product',
			'case worker'		:	'caseworker',
			'checkbox'	: 'check box',
			'chicken pox'		: 'chickenpox',
			'co-operate'		: 'cooperate',
			'co-ordinate'		: 'coordinate',
			'co-ordinator'		: 'coordinator',
			'color'			: 'colour',
			'Commonwealth Government' : 'Australian Government',
			'comprises of'	: 'comprises',
			'concensus'		: 'consensus',
			'confectionary'		: 'lollies',
			'cost effective'	: 'cost-effective',
			'cous cous'		:	'couscous',
			'cyber bully'		:	'cyberbully',
			'cyber bullying'		:	'cyberbullying',
			'data base'		: 'database',
			'de-sex'			: 'desex',
			'diesel fuel'		: 'diesel',
			'dietician'			: 'dietitian',
			'driver license'		: 'driver licence',
			'driver\'s licence'		: 'driver licence',
			'driver\'s license'		: 'driver licence',
			'drivers licence'		: 'driver licence',
			'drivers license'		: 'driver licence',
			'drivers\' license'		: 'driver licence',
			'e-mail'	: 'email',
			'e.g.,'		: 'e.g.',
			'eg'		: 'e.g.',
			'eg:'		: 'e.g.',
			'electric appliance'	: 'electrical appliance',
			'energy efficient'	: 'energy-efficient',
			'enroll'		: 'enrol',
			'facsimile'		: 'fax',
			'filmmaker'		: 'film maker',
			'fire fighter'		: 'firefighter',
			'fire-fighter'		: 'firefighter',
			'firearm licence': 'firearms licence',
			'firearm license': 'firearms licence',
			'firearms license': 'firearms licence',
			'first aid app'		:	'first-aid app',
			'first aid awareness course'		:	'first-aid awareness course',
			'first aid course'		:	'first-aid course',
			'first aid equipment'	: 'first-aid equipment',
			'first aid hints and tips'	: 'first-aid hints and tips',
			'first aid kit'		:	'first-aid kit',
			'first aid services'	: 'first-aid services',
			'first aid sign'	: 'first-aid sign',
			'first aid supplies'	: 'first-aid supplies',
			'first aid training'	: 'first-aid training',
			'flood water'		: 'floodwater',
			'floodwaters'		: 'floodwater',
			'flying doctors services'	: 'flying doctor services',
			'flying-fox'		: 'flying fox',
			'focussed'		: 'focused',
			'focusses'		: 'focuses',
			'free call'		:	'freecall',
			'front-line'		: 'frontline',
			'frontline'		:	'front-line',
			'gastro-intentestinal'	: 'gastrointestinal',
			'goverment'		:	'government',
			'half way'			: 'halfway',
			'half-way'			: 'halfway',
			'hand held'		: 'handheld',
			'hand-held'		: 'handheld',
			'hard-drive'		: 'hard drive',
			'harddrive'		: 'hard drive',
			'healthcare'		: 'health care',
			'high tide'			: 'high-tide',
			'his/her'			: 'their',
			'honor'		: 'honour',
			'i.e.,'		: 'i.e.',
			'info'				: 'information',
			'installment'		: 'instalment',
			'instances'			: 'cases',
			'judgment'		: 'judgement',
			'kilometre'			: 'km',
			'land holder'		: 'landholder',
			'land owner'		: 'landowner',
			'land-holder'		: 'land holder',
			'land-owner'		: 'landowner',
			'liason'		: 'liaison',
			'life saver'		: 'lifesaver',
			'life savers'		: 'lifesavers',
			'life time'		: 'lifetime',
			'life-saver'		: 'lifesaver',
			'life-savers'		: 'lifesavers',
			'life-time'		: 'lifetime',
			'lifecycle'		: 'life cycle',
			'liveable'		: 'livable',
			'locate'			: 'find',
			'long-day care'	: 'long day care',
			'magistrate court': 'Magistrates Court',
			'market place'		: 'marketplace',
			'marketted'		: 'marketed',
			'mid-wife'			: 'midwife',
			'might'				: 'may',
			'modeled'		: 'modelled',
			'more then'		: 'more than',
			'nation wide'	: 'nationwide',
			'nation-wide'	: 'nationwide',
			'night club'		: 'nightclub',
			'no one'		: 'no-one',
			'non-profit'		: 'not-for-profit',
			'nonprofit'		: 'not-for-profit',
			'noone'		: 'no-one',
			'not for profit'		: 'not-for-profit',
			'nowadays'		: 'now',
			'ocasion'		: 'occasion',
			'on-line'		: 'online',
			'organization'		: 'organisation',
			'organize'		: 'organise',
			'pay-roll'		: 'payroll',
			'per annum'		: 'a year',
			'per cent'		: '%',
			'percent'		: '%',
			'persons'		: 'people',
			'pixilated'		: 'pixelated',
			'post code'		: 'postcode',
			'post codes'		: 'postcodes',
			'post-code'		: 'postcode',
			'post-codes'		: 'postcodes',
			'post-natal'		: 'postnatal',
			'post natal'		: 'postnatal',
			'power line'		: 'powerline',
			'power lines'		: 'powerlines',
			'power-line'		: 'powerline',
			'power-lines'		: 'powerlines',
			'powerboard'		: 'power board',
			'powerboards'		: 'power boards',
			'pre-natal'			: 'prenatal',
			'pre natal'		: 'prenatal',
			'pre-nuptial'		: 'prenuptial',
			'pre nuptial'	: 'prenuptial',
			'prior to'		: 'before',
			'prior'		:	'before',
			'programme'		: 'program',
			'programmes'		: 'programs',
			'purchase'		: 'buy',
			'purchased'		: 'bought',
			're-apply'		: 'reapply',
			're-development'		: 'redevelopment',
			'rebuted'		: 'rebutted',
			'recordkeeping': 'record keeping',
			'regreted'		: 'regretted',
			'road work'		: 'roadworks',
			'roadwork'		: 'roadworks',
			'rooves'		: 'roofs',
			'same sex'		: 'same-sex (if being used as an adjective, such as in \'same-sex couple\'',
			'Schoolkid bonus'	: 'Schoolkids bonus',
			'self harm'			: 'self-harm',
			'sq km'				: 'km2',
			'state wide'		: 'statewide',
			'state-wide'		: 'statewide',
			'step-families'		: 'stepfamilies',
			'step-family'		: 'stepfamily',
			'sun tan'			: 'suntan',
			'sun-protection factor'	: 'sun protection factor',
			'sun-tan'			: 'suntan',
			'sunbed'			: 'sun bed',
			'suntanned skin'	: 'sun-tanned skin',
			'targetted'		: 'targeted',
			'telephone'		: 'phone',
			'timeframe'		: 'time frame',
			'town-house'		: 'townhouse',
			'trade mark'		: 'trademark',
			'tradeshow'		: 'trade show',
			'traveled'		: 'travelled',
			'traveler'		: 'traveller',
			'traveling'		: 'travelling',
			'trialed'		: 'trialled',
			'ultra-violet'		: 'ultraviolet',
			'under way'		: 'underway',
			'upon'		: 'on',
			'usage'	: 'use',
			'useable'	: 'usable',
			'useful information': 'helpful information',
			'useful resources'	: 'helpful resources',
			'utilise'	: 'use',
			'utilize'	: 'use',
			'verandah'		: 'veranda',
			'Veterans Affairs'	: 'Veterans\' Affairs',
			'videoconfering'	: 'videoconferencing',
			'view point'		: 'viewpoint',
			'web site'		: 'website',
			'web-page'		: 'web page',
			'web-site'		: 'website',
			'webpage'		: 'web page',
			'well being'		: 'wellbeing',
			'well-being'		: 'wellbeing',
			'whilst'		: 'while',
			'wild flower'		: 'wildflower',
			'wild flowers'		: 'wildflowers',
			'wild-flower'		: 'wildflower',
			'wild-flowers'		: 'wildflowers',
			'work force'		: 'workforce',
			'work, life balance'	: 'work–life balance',
			'work-force'		: 'workforce',
			'work-life balance'	: 'work–life balance',
			'work/life balance'	: 'work–life balance'

			// no ',' on last line
		},


		// list of non preferred terms (case sensitive matching)
		NPT_CASE_SENSITIVE = {
			// format: NPT : preferred term
			'aged pension': 'Age Pension',
			'age pension': 'Age Pension',
			'Age pension': 'Age Pension',
			'Australian Bat Lyssavirus' : 'Australian bat lyssavirus',
			'Approved Participants'	: 'approved participants',
			'Australian business number'	:	'Australian Business Number',
			'Australian company number'	:	'Australian Company Number',
			'Australian disability parking permit'	:	'Australian Disability Parking Permit',
			'B.B.Q.'		: 'BBQ',
			'barbeque'		: 'BBQ',
			'bbq'		: 'BBQ',
			'Body Corporate'	: 'body corporate',
			'cabinet'	:	'Cabinet (if referring to government)',
			'carer allowance'	:	'Carer Allowance',
			'central Queensland'	:	'Central Queensland (Defined region. Generic: central Queensland)',
			'Child Protection Order'		:	'child protection order',
			'Children\'s Court'		:	'Childrens Court',
			'Citizenship Ceremony'	:	'citizenship ceremony',
			'Coal Seam Gas'	: 'coal seam gas',
			'Companion Card'	:	'companion card',
			'court registry'		:	'Court Registry',
			'e-business'	:	'eBusiness',
			'e-learning'		: 'eLearning',
			'ebusiness'	:	'eBusiness',
			'Education Tax Refund': 'education tax refund',
			'elearning'		: 'eLearning',
			'Emergency Services'	:	'emergency services',
			'Environmental Impact Statement'	:	'environmental impact statement',
			'executive council'	: 'Executive Council',
			'facebook'	:	'Facebook',
			'far north Queensland'	:	'Far North Queensland (Defined region. Generic: far north Queensland)',
			'Federal Government'	:	'federal government',
			'Fringe Benefits Tax'	:	'fringe benefits tax',
			'gazette' : 'Gazette (when followed by a number. e.g Gazette 123)',
			'Gazettes': 'gazettes (Plurals are lowercase)',
			'grade 1'		:	'Grade 1',
			'grade 10'		:	'Grade 10',
			'grade 11'		:	'Grade 11',
			'grade 12'		:	'Grade 12',
			'grade 2'		:	'Grade 2',
			'grade 3'		:	'Grade 3',
			'grade 4'		:	'Grade 4',
			'grade 5'		:	'Grade 5',
			'grade 6'		:	'Grade 6',
			'grade 7'		:	'Grade 7',
			'grade 8'		:	'Grade 8',
			'grade 9'		:	'Grade 9',
			'Health Care Card': 'health care card',
			'indigenous'	: 'Indigenous (if referring to Aboriginal or Torres Strait Islander peoples)',
			'Internet'	:	'internet',
			'Justice of the Peace'	: 'justice of the peace',
			'Kindy'			: 'kindy',
			'legal aid youth'		:	'Legal Aid Youth',
			'legislative assembly'	: 'Legislative Assembly',
			'lower house'	: 'Lower House',
			'Magistrate'		:	'magistrate',
			'magistrates court': 'Magistrates Court',
			'Mastercard': 'MasterCard',
			'district court': 'District Court',
			'supreme court': 'Supreme Court',
			'member of parliament'	: 'Member of Parliament',
			'north Queensland'	: 'North Queensland (Defined region. Generic: north Queensland)',
			'O.K'		:	'OK',
			'O.K.'		:	'OK',
			'o.k.'		:	'OK',
			'ok'		:	'OK',
			'okay'		:	'OK',
			'Page'		: 'page',
			'Pages'		: 'pages',
			'parents and citizens association': 'Parents and Citizens Association',
			'parents and friends Association' : 'Parents and Friends Association',
			'parliament'	: 'Parliament',
			'Parliamentary'	: 'parliamentary',
			'Payroll Tax'	: 'payroll tax',
			'Power of Attorney'	: 'power of attorney',
			'prep'	: 'Prep (first year of school)',
			'Qconnect'	: 'qconnect (if referring to the regional bus service)',
			'south east Queensland'	: 'South East Queensland (Defined region. Generic: south east Queensland)',
			'state budget'	: 'State Budget',
			'State Government' : 'state government',
			'Statutory Declaration'	: 'statutory declaration',
			'Tax File Number'		:	'tax file number',
			'Tenancy Agreement': 'tenancy agreement',
			'Translink'	: 'TransLink',
			'twitter'	: 'Twitter',
			'upper house'	: 'Upper House',
			'VISA'		: 'Visa',
			'visa'		: 'Visa (credit card only)',
			'volume'	: 'Volume (as in Volume 1 etc.)',
			'Volumes'	: 'volumes',
			'yellow pages'	: 'Yellow Pages',
			'Youth Detention Centre'		:	'youth detention centre',
			'Youth Justice Conference'		:	'youth justice conference',
			'Youtube'	: 'YouTube',
			'bing'				: 'Bing (if referring to the search engine)',
			'Body Mass Index'	: 'body mass index',
			'Chickenpox'		: 'chickenpox',
			'Chicken pox'		: 'chickenpox',
			'Cholera'			: 'cholera',
			'computed tomography'	: 'Computed Tomography',
			'Computed tomography'	: 'Computed Tomography',
			'Diptheria'			: 'diptheria',
			'google'			: 'Google',
			'Haemophilus Influenzae Type B'	: 'haemophilus influenzae type b',
			'Hepatitis A'		: 'hepatitis A',
			'Hepatitis B'		: 'hepatitis B',
			'great walks'		: 'Great Walks (walking tracks through protected areas in Queensland)',
			'healthcare card'	: 'Health Care Card',
			'health care card'	: 'Health Care Card',
			'Hendra virus'		: 'hendra virus',
			'Human Papillomavirus'	: 'human papillomavirus',
			'Human papillomavirus'	: 'human papillomavirus',
			'Influenza'			: 'influenza',
			'Intrauterine Insemination '	: 'intrauterine insemination ',
			'In-Vitro Fertilisation'	: 'in-vitro fertilisation',
			'Kilojoules'		: 'kilojoules',
			'Measles'			: 'measles',
			'Mumps'				: 'mumps',
			'Meningococcal C Disease'	: 'meningococcal C disease',
			'medicare card'		: 'Medicare card',
			'Medicare Card'		: 'Medicare card',
			'medicare'			: 'Medicare',
			'medical aids subsidy scheme'	: 'Medical Aids Subsidy Scheme',
			'Medical specialist outreach assistance program'	: 'Medical Specialist Outreach Assistance Program',
			'pap smear'			: 'Pap smear',
			'Pneumococcal Disease'	: 'pneumococcal disease',
			'Polio'				: 'polio',
			'Polycystic Ovarian Syndrome'	: 'Polycystic ovarian syndrome',
			'Parks and Forests'	: 'parks and forests',
			'Pest Control'		: 'pest control',
			'Qfinder'			: 'QFinder',
			'QFINDER'			: 'QFinder',
			'Rotavirus'			: 'rotavirus',
			'Royal flying doctor service'	: 'Royal Flying Doctor Service',
			'royal flying doctor service'	: 'Royal Flying Doctor Service',
			'Rubella (German Measles)'	: 'rubella (German measles)',
			'Rabies'			: 'rabies',
			'schoolkids bonus'	: 'Schoolkids Bonus',
			'schoolkid bonus'	: 'Schoolkids Bonus',
			'Sudden Unexpected Death in Infancy'	: 'sudden unexpected death in infancy',
			'Sudden Infant Death Syndrome'	: 'sudden infant death syndrome',
			'State Forest'		: 'state forest',
			'Type 2 Diabetes'	: 'type 2 diabetes',
			'top up'			: 'top-up (e.g. top-up vitamin D levels)',
			'true local'		: 'True Local',
			'Tetanus'			: 'tetanus',
			'Typhoid Fever'		: 'typhoid fever',
			'Typhoid fever'		: 'typhoid fever',
			'Tuberculosis'		: 'tuberculosis',
			'veterans affairs'	: 'Veterans\' Affairs',
			'veterans\' affairs'	: 'Veterans\' Affairs',
			'Vitamin D'			: 'vitamin D',
			'white pages'		: 'White Pages',
			'Whooping cough'	: 'whooping cough',
			'Whooping Cough'	: 'whooping cough',
			'xrays'				: 'X-rays',
			'x-rays'			: 'X-rays',
			'Yellow Fever'		: 'yellow fever',
			'Yellow fever'		: 'yellow fever'
			// no ',' on last line
		},


		// passive voice
		PASSIVE_VOICE = [
			"has been",
			"hasn't been",
			"has not been",
			"have been",
			"haven't been",
			"have not been",
			"was",
			"wasn't",
			"was not",
			"were",
			"were't",
			"were not",
			"will be",
			"will not be",
			"might be",
			"might not be",
			"won't be",
			"going to be",
			"not going to be",
			"is being",
			"is not being",
			"should be",
			"should not be",
			"must be",
			"must not be"
			// no ',' on last line
		],

		// list of non preferred terms (case sensitive matching)
		PAST_PARTICIPLES = [
			'agreed',
			'alleged',
			'allowed',
			'answer',
			'answered',
			'arisen',
			'asked',
			'been',
			'begun',
			'believed',
			'bit',
			'bitten',
			'blown',
			'borne',
			'borrowed',
			'bought',
			'broken',
			'brought',
			'called',
			'carried',
			'caught',
			'changed',
			'chosen',
			'closed',
			'come',
			'crept',
			'cut',
			'decided',
			'directed',
			'dived',
			'done',
			'dragged',
			'drawn',
			'dreamt',
			'driven',
			'drowned',
			'drunk',
			'eaten',
			'explained',
			'fallen',
			'felt',
			'filled',
			'finished',
			'flown',
			'followed',
			'forgiven',
			'forgotten',
			'forgotten',
			'fought',
			'found',
			'frozen',
			'given',
			'gone',
			'got',
			'gotten',
			'grown',
			'heard',
			'helped',
			'hidden',
			'hung',
			'known',
			'laid',
			'lain',
			'learned',
			'led',
			'left',
			'liked',
			'listened',
			'lit',
			'lived',
			'looked',
			'lost',
			'lost',
			'made',
			'moved',
			'needed',
			'opened',
			'paid',
			'played',
			'promised',
			'proved',
			'proven',
			'put',
			'read',
			'remembered',
			'ridden',
			'run',
			'run',
			'rung',
			'said',
			'sat',
			'seen',
			'seen',
			'sent',
			'set',
			'set',
			'shaken',
			'sold',
			'sought',
			'spent',
			'spoken',
			'sprung',
			'started',
			'stolen',
			'stood',
			'stopped',
			'struck',
			'studied',
			'stung',
			'suggested',
			'sung',
			'sunk',
			'sworn',
			'swum',
			'swung',
			'take',
			'taken',
			'talked',
			'thought',
			'thrown',
			'told',
			'took',
			'torn',
			'travelled',
			'tried',
			'turned',
			'understood',
			'used',
			'waited',
			'walked',
			'wanted',
			'watched',
			'woken',
			'won',
			'worked',
			'worn',
			'worried',
			'written'


			// no comma on last line
		]
	;


	/*

	simple regexp: /foo/
	but when you need to use a javascript variable, you need to do this:
	new RegExp( variableName );

	/foo/gi (global, case insensitive)
	= new RegExp( variableName, 'gi' )

	*/
	test( 'non-preferred terms', function() {
		var nptFound = [];

		// strictEqual( /prior to/i.test( body ), false, 'use ‘before’ instead of ‘prior to’' );
		$.each( NPT, function( npt, pt ) {
			// check if NPT is found in document
			var regex = new RegExp( '\\b' + npt + '\\b', 'i' );

			if ( regex.test( body )) {
				ok( false, npt + ' should be ' + pt );
				nptFound.push( npt );
			} else {
				ok( true, npt + ' not found' );
			}
		});

		// strictEqual( /elearning/.test( body ), false, 'use ‘eLearning’ instead of ‘elearning’' );
		$.each( NPT_CASE_SENSITIVE, function( npt, pt ) {
			// check if NPT is found in document
			var regex = new RegExp( '\\b' + npt + '\\b' );

			if ( regex.test( body )) {
				ok( false, npt + ' should be ' + pt );
				nptFound.push( npt );
			} else {
				ok( true, npt + ' not found' );
			}
		});

		// highlight any npt
		contentContainer.highlightRegex( new RegExp( '\\b(' + nptFound.join( '|' ) + ')\\b', 'i' ));
	});


	test( 'passive voice', function() {
		var ppFound = [];

		// strictEqual( /(has been|was|should be) agreed/i.test( body ), false, 'passive voice ‘agreed’' );
		$.each( PAST_PARTICIPLES, function( index, pastParticiples ) {
			// check if passive voice is found in document
			if ( new RegExp( "\\b(" + PASSIVE_VOICE.join( '|' ) + ")\\s+" + pastParticiples + '\\b', 'i' ).test( body )) {
				$.each( PASSIVE_VOICE, function( index, passiveVoice ) {
					strictEqual( new RegExp( "\\b"+ passiveVoice + "\\s+" + pastParticiples + '\\b', 'i' ).test( body ), false, 'passive voice ‘' + passiveVoice + ' ' + pastParticiples + '’' );
				});
				ppFound.push( pastParticiples );

			} else {
				ok( true, 'passive voice ‘' + pastParticiples + '’' );
			}
		});

		// any issues?
		if ( ppFound.length > 0 ) {
			// highlight them! (use 'passive-voice' class)
			contentContainer.highlightRegex( new RegExp( '\\b(has been|hasn\'t been|has not been|have been|haven\'t been|have not been|was|wasn\'t|was not|were|were\'t|were not|will be|will not be|might be|might not be|won\'t be|going to be|not going to be|is being|is not being|should be|should not be|must be|must not be)\\s+(' + ppFound.join( '|' ) + ')\\b' ), { 'className' : 'passive-voice' });
		}
	});


	test( 'character limits', function() {

		// 45 characters for h1
		$( 'h1', '#content, #asides' ).each(function() {
			// heading text
			var $this = $( this ),
				headingText = $this.text();

			strictEqual( headingText, headingText.substring( 0, 45 ), 'h1 heading should not be more than 45 characters' );

			if ( headingText.length > 45 ) {
				$this.addClass( 'highlight' );
			}
		});

		// 45 characters for h2-h4
		$( 'h2, h3, h4', '#content, #asides' ).each(function() {

			// heading text
			var $this = $( this ),
				headingText = $.trim( $this.getFilteredText( '.print-link-url' )).replace( /\s+/g, ' ' );

			strictEqual( headingText, headingText.substring( 0, 45 ), 'h2-h4 heading should not be more than 45 characters' );

			if ( headingText.length > 45 ) {
				$this.addClass( 'highlight' );
			}
		});

		// 7 words for link text
		$( 'a', '#content, #asides' ).not( '[href^=mailto]' ).each(function() {
			// link text
			var $this = $( this ),
				linkText = $this.getFilteredText( '.meta' ),
				// en-dash \u2013
				// right single quote \u2019
				linkWords = $.trim( linkText ).split( /[^a-z0-9'\u2019\u2013\-]+/i )
			;

			if ( linkWords.length > 7 ) {
				// note: splice alters the variable!
				strictEqual( linkWords.join( ' ' ), linkWords.splice( 0, 7 ).join( ' ' ), 'link text should be 1-7 words' );
				$this.addClass( 'highlight' );
			} else {
				ok( true, 'link text should be 1-7 words' );
			}


		});

	});


	test( 'h1 heading', function() {

		var h1 = $( '.article h1', '#content' ).eq( 0 );

		strictEqual( $( 'h1', '#content' ).length, 1, 'should only be 1 h1 heading' );

		$( 'h2, h3, h4, h5, h6', '#content-container' ).each(function() {
			notStrictEqual( $( this ).text(), h1.text(), 'should not repeat h1 heading' );
		});
	});


	test( 'numbers as words', function() {
		// starting a sentence with a number word is ok (capital letter)
		// some phrases are ok, e.g. "in one place" NOT "in 1 place"
	//	var numberWords = /\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/;
		var numberWords = /\b(two|three|four|five|six|seven|eight|nine|ten)\b/;

		strictEqual( numberWords.test( body ), false, 'body content should not contain numbers as words (use numerals)' );
		strictEqual( numberWords.test( getMeta( 'description' )), false, 'meta description should not contain numbers as words (use numerals)' );
	});


	test( 'spaced dashes', function() {

		strictEqual( /\s-/.test( body ), false, 'should not have spaces around hyphen (This should probably be an unspaced em dash. If it\'s a range, it should be an en dash.)' );
		strictEqual( /\s\u2014/.test( body ), false, 'should not have spaces before em dash' );
		strictEqual( /\u2014\s/.test( body ), false, 'should not have spaces after em dash' );

		contentContainer.highlightRegex( /\S+\s+[\-\u2014]\s+\S+/ );

	});


	test( 'double quotes', function() {

		strictEqual( /"/.test( body ), false, 'Double quotes only for a quote within a quote. (Use single quotes in the first instance.)' );
		strictEqual( /\u201C/.test( body ), false, 'Double quotes only for a quote within a quote. (Use single quotes in the first instance.)' );
		strictEqual( /\u201D/.test( body ), false, 'Double quotes only for a quote within a quote. (Use single quotes in the first instance.)' );

		contentContainer.highlightRegex( /\S+\s*["\u201C\u201D]\s*\S+/ );

	});


	test( 'possible plural', function() {

		strictEqual( /\w\/s\b/.test( body ), false, 'Use an s in brackets to indicate a potential plural, not a slash. example(s), not example\/s' );

		contentContainer.highlightRegex( /\w+\/s\b/ );

	});


	test( 'phone number formats', function() {

		// 1800 XXX XXX
		strictEqual( /\b1[38]00\d/.exec( body ), null, 'must have a space after 1300/1800' );
		strictEqual( /\b1[38]00\s+(?:\D|\d\D|\d\d\D)/.exec( body ), null, 'must have 3 digits after 1300/1800' );

		// (0A) 1234 1234 or +61 A 1234 1234

/*
TODO grab all "phone numbers" in page, test against patterns


Type	Example	Format
Free call	1800 123 456	1800 XXX XXX
Local call (QGov)	13 QGOV (13 74 68)	As example
Local call other	13 74 68	13 XX XX
Local call Health	13 HEALTH (13 43 25 84)	As example
SES	132 500	As example
Mobile	0123 456 789	XXXX XXX XXX
Phone/fax	(07) 1234 5678	(0X) XXXX XXXX
International	+61 7 1234 5678	+61 X XXXX XXXX
*/

	});

}( jQuery ));
