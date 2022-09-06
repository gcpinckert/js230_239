# Booking App Documentation

## 1

How many staff are there?

`/api/staff_members` -> retrieves all available staff members

5
```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 331
Content-Type: application/json; charset=utf-8
Date: Sat, 03 Sep 2022 18:21:34 GMT
ETag: W/"14b-EcrUfy06sHLM3nQG4hll83893C8"
X-Powered-By: Express

[
    {
        "email": "ewald@mills.com",
        "id": 1,
        "name": "Fae Kassulke V"
    },
    {
        "email": "kali@rosenbaumtremblay.biz",
        "id": 2,
        "name": "Aaron Nitzsche"
    },
    {
        "email": "steve_marvin@bergnaum.co",
        "id": 3,
        "name": "Gia Rice"
    },
    {
        "email": "jacques@monahanboehm.org",
        "id": 4,
        "name": "Esperanza Doyle"
    },
    {
        "email": "gina.harber@ruelturner.io",
        "id": 5,
        "name": "Lacey Kautzer I"
    }
]
```

## 2

How many students are there?

`/api/students` -> retrieves all registered students

5

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 339
Content-Type: application/json; charset=utf-8
Date: Sat, 03 Sep 2022 18:22:31 GMT
ETag: W/"153-b5xMsFO4jTRPPTr+t9ByHI8DRHI"
X-Powered-By: Express

[
    {
        "email": "esmeralda.weber@huel.biz",
        "id": 1,
        "name": "Dashawn Bergstrom"
    },
    {
        "email": "marquise@jacobi.info",
        "id": 2,
        "name": "Bettie Swaniawski"
    },
    {
        "email": "keaton@morar.io",
        "id": 3,
        "name": "Madaline Armstrong"
    },
    {
        "email": "aniya@dachkuphal.biz",
        "id": 4,
        "name": "Julius Balistreri"
    },
    {
        "email": "enrico_prosacco@ortiz.com",
        "id": 5,
        "name": "Mrs. Randy Roob"
    }
]
```

## 3

How many schedules exist?

`/api/schedules` -> retrieves all available schedules

9

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 734
Content-Type: application/json; charset=utf-8
Date: Sat, 03 Sep 2022 18:23:10 GMT
ETag: W/"2de-IIQZdXYDzTaHZn7vUqN3gXZ2qrQ"
X-Powered-By: Express

[
    {
        "date": "07-01-18",
        "id": 1,
        "staff_id": 1,
        "student_email": null,
        "time": "06:10"
    },
    {
        "date": "07-02-18",
        "id": 2,
        "staff_id": 1,
        "student_email": null,
        "time": "06:20"
    },
    {
        "date": "07-03-18",
        "id": 3,
        "staff_id": 1,
        "student_email": "marquise@jacobi.info",
        "time": "06:30"
    },
    {
        "date": "08-01-18",
        "id": 4,
        "staff_id": 2,
        "student_email": null,
        "time": "07:10"
    },
    {
        "date": "08-02-18",
        "id": 5,
        "staff_id": 2,
        "student_email": "keaton@morar.io",
        "time": "07:20"
    },
    {
        "date": "09-01-18",
        "id": 6,
        "staff_id": 3,
        "student_email": null,
        "time": "08:10"
    },
    {
        "date": "09-02-18",
        "id": 7,
        "staff_id": 3,
        "student_email": "aniya@dachkuphal.biz",
        "time": "08:20"
    },
    {
        "date": "09-03-18",
        "id": 8,
        "staff_id": 3,
        "student_email": null,
        "time": "08:30"
    },
    {
        "date": "09-04-18",
        "id": 9,
        "staff_id": 3,
        "student_email": null,
        "time": "08:40"
    }
]
```

## 4

How many schedules have bookings? 3

Count schedules that have `student_email` properties that are not `null` in above.

## 5

Do all staff have a schedule? None

## 6

Did all students book a schedule? None
