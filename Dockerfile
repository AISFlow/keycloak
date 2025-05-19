FROM quay.io/keycloak/keycloak:26.2.3

ADD --link --chown=1000:1000 https://github.com/NavyStack/tailcloakify/releases/download/v3.0.3/keycloak-theme-for-kc-all-other-versions.jar /opt/keycloak/providers/keycloak-theme.jar
