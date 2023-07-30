

function joho(num){
    var S="";
    let ma="";
    let sha="";
    let zahyo="";

    if (num===1) {
        S="ここはみんなの住む拠点。作業台やかまど、倉庫などがあるぞ！さらに、駅があり新座ミーヤ駅までつながっているぞ！";
        ma="map(kyoten)";
        sha="kyoten";
        zahyo="56,59,-88";
    } else if (num===2) {
        S=`【新座ミーヤヒルズ】
        築2ヶ月
        秋津中央駅から疾走10秒
        ワンルーム バルコニー付き
        一人暮らしの人向けの物件
        徒歩一分コンビニ有り`;
        ma="map(manshon)";
        sha="manshon";
        zahyo="75,70,-107";
    } else if (num===3) {
        S="現在は改修工事中だが、ここはスノーゴーレムの住む家。ゾンビトラップの腐肉も運ばれてくるぞ！";
        ma="map(snowGhouse)";
        sha="snowGhouse";
        zahyo="110,62,-101";
    } else if (num===4) {
        S="ここは農場。小麦や人参を植えている。また、カボチャやスイカもとれるぞ！";
        ma="map(nojo)";
        sha="noujou";
        zahyo="75,64,-68";
    } else if (num===5) {
        S="ここはFamily〇art風のにんじんマート。この上にさらに建築される予定があるぞ！ここのコンビニでQOLを上げよう！";
        ma="map(conbini)";
        sha="conbini";
        zahyo="109,65,-62";
    } else if (num===6) {
        S="ここは拠点からつながる新座ミーヤ駅(名付け親は友達)。モチーフは新座駅である。";
        ma="map(niizami-ya)";
        sha="eki";
        zahyo="144,72,24";
    } else if (num===7) {
        S="ここは灯台。ジャングルに行き来するときの目印として役に立つぞ！";
        ma="map(todai)";
        sha="todai";
        zahyo="125,69,28";
    }

    $("#shosai").text(S)
    $("#map").children("img").attr("src",`./madia/${ma}.png`);
    $("#shasin").children("img").attr("src",`./madia/${sha}.png`);
    $("#zahyo").text("(X,Y,Z)=("+zahyo+")")
}