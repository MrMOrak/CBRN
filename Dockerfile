FROM openjdk:17
COPY ./src/main/docker/cbrn-0.0.1-SNAPSHOT.jar cbrn-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "cbrn-0.0.1-SNAPSHOT.jar"]