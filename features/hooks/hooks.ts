import {
    Before,
    After
} from '@wdio/cucumber-framework';

Before(async () => {

    console.log(
        'Starting Test Execution'
    );
});

After(async () => {

    console.log(
        'Test Execution Completed'
    );
});
