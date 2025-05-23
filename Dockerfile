FROM quay.io/keycloak/keycloak:26.2.3 as prepare

ADD --link --chown=1000:1000 https://github.com/NavyStack/tailcloakify/releases/download/v3.0.3/keycloak-theme-for-kc-all-other-versions.jar /opt/keycloak/providers/keycloak-theme.jar

FROM quay.io/keycloak/keycloak:26.2.3

COPY --from=prepare /opt/keycloak /opt/keycloak

WORKDIR /opt/keycloak

ENV KC_HOSTNAME_STRICT=false
ENV KC_HTTPS_PORT=8443
ENV KC_HTTPS_PROTOCOLS=TLSv1.3,TLSv1.2
ENV KC_HTTP_ENABLED=true
ENV KC_HTTP_PORT=8080
ENV KC_BOOTSTRAP_ADMIN_USERNAME=admin
ENV KC_BOOTSTRAP_ADMIN_PASSWORD=admin
ENV TAILCLOAKIFY_ADDITIONAL_SCRIPTS="Cookie Script Here"
ENV TAILCLOAKIFY_BACKGROUND_LOGO_URL=""
ENV TAILCLOAKIFY_BACKGROUND_VIDEO_URL=""
ENV TAILCLOAKIFY_FOOTER_IMPRINT_URL="Impressum URL Here"
ENV TAILCLOAKIFY_FOOTER_DATAPROTECTION_URL="Data Protection URL Here"
ENV TAILCLOAKIFY_FOOTER_ORESTBIDACOOKIECONSENT="true"

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start"]