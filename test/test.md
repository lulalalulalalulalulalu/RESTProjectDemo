

curl -X GET -H "Content-Type: application/json"  http://127.0.0.1:3000/users/

curl -X POST -H "Content-Type: application/json" -d @test/test_user.json http://127.0.0.1:3000/users/

curl -X GET -H "Content-Type: application/json"  http://127.0.0.1:3000/users/abcddedf


curl -X POST -H "Content-Type: application/json" -H "hb-user: 15001811006" -d @test/anxin.json http://127.0.0.1:8866/api/product/AXXHDEXZLYLA/coverages