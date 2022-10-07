# mobile-testing-framework
A mobile testing framework using Appium and WebdriverIO for testing applications on iOS and Android platforms


`Setup Node JS`
Follow guide on [Setting up NODE JS] https://github.com/nvm-sh/nvm  

`Setup JDK`
Follow Guide on [Setup JAVA_HOME] on node JS
https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/

`JDK Download link` https://www.oracle.com/java/technologies/downloads/ 

`Android Studio download Link`
https://developer.android.com/studio

`Setup ANDROID_HOME`

Open the Environment Variable file:
`vim ~/.zshenv`

Add the environment variables:

`export ANDROID_HOME=/Users/username/Library/Android/sdk/`

`export PATH=$ANDROID_HOME/platform-tools:$PATH`

`export PATH=$ANDROID_HOME/tools:$PATH`

Source the changes: `source ~/.zshenv`

    Test changes:
        echo $ANDROID_HOME
        adb devices - should return list of devices attached
 
**Note**: the same changes can be added to .zshrc or .bashprofile file as well

`Appium Inspector Setup`
    https://github.com/appium/appium-inspector/releases

    Installing Appium Drivers
        iOS: appium driver install xcuitest
        Android: appium driver install uiautomator2
    
    Check the installed drivers
        appium driver list




`Install and Configure WebdriverIO` https://webdriver.io/docs/gettingstarted

