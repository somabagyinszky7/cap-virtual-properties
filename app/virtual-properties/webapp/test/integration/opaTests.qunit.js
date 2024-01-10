sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'virtualproperties/test/integration/FirstJourney',
		'virtualproperties/test/integration/pages/SomeEntitiesList',
		'virtualproperties/test/integration/pages/SomeEntitiesObjectPage'
    ],
    function(JourneyRunner, opaJourney, SomeEntitiesList, SomeEntitiesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('virtualproperties') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSomeEntitiesList: SomeEntitiesList,
					onTheSomeEntitiesObjectPage: SomeEntitiesObjectPage
                }
            },
            opaJourney.run
        );
    }
);