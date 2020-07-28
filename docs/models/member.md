## MemberRequest
+ mail_address: `test@example.com` (string, required) - メールアドレス
+ mail_address_confimation: `test@example.com` (string, required) - メールアドレス(確認用)
+ password: `passwordexample` (string, required) - パスワード
+ password_confimation: `passwordexample` (string, required) - パスワード(確認用)
+ last_name: `佐藤` (string, required) - 姓
+ first_name: `太郎` (string, required) - 名
+ last_name_kana: `佐藤` (string, required) - 姓(カナ)
+ first_name_kana: `太郎` (string, required) - 名(カナ)
+ sex: `1` (enum[number], required) - 性別(1: 男性, 2:女性)
    + `1`
    + `2`
+ birthday_year: `1970` (number, required) - 生年月日(年)
+ birthday_month: `4` (number, required) - 生年月日(月)
+ birthday_day: `30` (number, required) - 生年月日(日)
+ post_code: `1030013` (string, required) - 郵便番号
+ address1: `東京都` (string, required) - 都道府県
+ address2: `中央区` (string, required) - 市区町村
+ address3: `日本橋人形町2-14-6` (string, required) - 以降の住所
+ address4: `セルバ人形町2F` (string, optional) - 建物名、号室
+ tel1: `0300000000` (string, required) - 電話番号1
+ tel2: `0300000000` (string, optional) - 電話番号2
+ height: `175` (number, required) - 身長
+ weight: `60` (number, required) - 体重
+ enquete: `search_engine`,`media`,`tvcm`,`fold_flyers`,`train_ad`,`sns`,`movie`,`recommend`,`see`,`other` (array, required) - 何を見てメディカルチェックスタジオ（スマート脳ドック）を知りましたか
+ enquete_other_text: `その他の理由` (string, optional) - その他の理由

## MemberResponse
+ mail_address: `test@example.com` (string) - メールアドレス
+ last_name: `佐藤` (string) - 姓
+ first_name: `太郎` (string) - 名
+ last_name_kana: `佐藤` (string) - 姓(カナ)
+ first_name_kana: `太郎` (string) - 名(カナ)
+ sex: `1` (enum[number]) - 性別(1: 男性, 2:女性)
    + `1`
    + `2`
+ birthday_year: `1970` (number) - 生年月日(年)
+ birthday_month: `4` (number) - 生年月日(月)
+ birthday_day: `30` (number) - 生年月日(日)
+ post_code: `1030013` (string) - 郵便番号
+ address1: `東京都` (string) - 都道府県
+ address2: `中央区` (string) - 市区町村
+ address3: `日本橋人形町2-14-6` (string) - 以降の住所
+ address4: `セルバ人形町2F` (string) - 建物名、号室
+ tel1: `0300000000` (string) - 電話番号1
+ tel2: `0300000000` (string) - 電話番号2
+ height: `175` (number) - 身長
+ weight: `60` (number) - 体重
+ enquete: `search_engine`,`media`,`tvcm`,`fold_flyers`,`train_ad`,`sns`,`movie`,`recommend`,`see`,`other` (array) - 何を見てメディカルチェックスタジオ（スマート脳ドック）を知りましたか
+ enquete_other_text: `その他の理由` (string) - その他の理由
