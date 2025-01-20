
import { IsIPAD } from "@/thems/app.constant";
import { Image } from "react-native";
import { verticalScale } from "react-native-size-matters";


export const onbordingSlides: onBoardingSlidesTypes[] = [
    {
        color: '#fff',
        title: "Explore",
        image: (
            <Image source={require("../assets/images/onboarding/1.png")} 
            style={{ 
                width: IsIPAD ? verticalScale(345) : verticalScale(300), 
                height: IsIPAD ? verticalScale(345) : verticalScale(300) 
            }} />
        ),
        secondTitle: "Our community",
        subTitle: "Discover the convenience of finding your perfect ride with our Ryde App"
    }
]