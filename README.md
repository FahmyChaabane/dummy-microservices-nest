microservices in NEST :

Redis VS RMQ : https://www.educba.com/rabbitmq-vs-redis/

> By default, Redis implementation is send and forget, Rabbitmq does persist the data when the consumer is busy or down.
> also, Redis dispatch (the term is "multiplexing" i believe...) between all subscribers sharing the same pattern (same queue name too). RabbitMq does not, it just loadbalances between consumers. WHY ? READ about this : https://stackoverflow.com/questions/10620976/rabbitmq-amqp-single-queue-multiple-consumers-for-same-message
> it's just Nestjs implementation : https://stackoverflow.com/questions/62949674/listening-to-multiple-rabbitmq-queues-with-nestjs

> hint to allow mutiple transports for a nestjs microservice : https://github.com/nestjs/nest/issues/444 & https://github.com/nestjs/nest/blob/master/sample/03-microservices/src/main.ts

to run supportive containers

> docker container run -d --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management // second port is for the web gui
> docker container run -d --name some-redis -p 6379:6379 redis:alpine // i downloaded https://snapcraft.io/install/redis-desktop-manager/ubuntu as gui
